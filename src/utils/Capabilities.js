import axios from 'axios';

/*
    权限控制
*/
export class Capabilities {
  static STATUS_TIMEOUT = 2000;
  static async detectQueryType() {
    // Check SQL endpoint
    try {
      await axios.post(
        '/druid/v2/sql',
        { query: 'SELECT 1337', context: { timeout: Capabilities.STATUS_TIMEOUT } },
        { timeout: Capabilities.STATUS_TIMEOUT },
      );
    } catch (e) {
      const { response } = e;
      if (response.status !== 405 && response.status !== 404) {
        return; // other failure
      }
      try {
        await axios.get('/status', { timeout: Capabilities.STATUS_TIMEOUT });
      } catch (e) {
        return; // total failure
      }
      // Status works but SQL 405s => the SQL endpoint is disabled

      try {
        await axios.post(
          '/druid/v2',
          {
            queryType: 'dataSourceMetadata',
            dataSource: '__web_console_probe__',
            context: { timeout: Capabilities.STATUS_TIMEOUT },
          },
          { timeout: Capabilities.STATUS_TIMEOUT },
        );
      } catch (e) {
        if (response.status !== 405 && response.status !== 404) {
          return; // other failure
        }

        return 'none';
      }

      return 'nativeOnly';
    }

    return 'nativeAndSql';
  }

  static async detectNode(node) {
    try {
      await axios.get(`/druid/${node === 'overlord' ? 'indexer' : node}/v1/isLeader`, {
        timeout: Capabilities.STATUS_TIMEOUT,
      });
    } catch (e) {
      return false;
    }

    return true;
  }

  constructor(options) {
    this.queryType = options.queryType;
    this.coordinator = options.coordinator;
    this.overlord = options.overlord;
  }

  getModeExtended() {
    const { queryType, coordinator, overlord } = this;

    if (queryType === 'nativeAndSql') {
      if (coordinator && overlord) {
        return 'full';
      }
      if (!coordinator && !overlord) {
        return 'no-proxy';
      }
    } else if (queryType === 'nativeOnly') {
      if (coordinator && overlord) {
        return 'no-sql';
      }
      if (!coordinator && !overlord) {
        return 'no-sql-no-proxy';
      }
    } else {
      if (coordinator) {
        return 'coordinator';
      }
      if (overlord) {
        return 'overlord';
      }
    }

    return;
  }

  hasEverything() {
    return this.queryType === 'nativeAndSql' && this.coordinator && this.overlord;
  }

  hasQuerying() {
    return this.queryType !== 'none';
  }

  hasSql() {
    return this.queryType === 'nativeAndSql';
  }

  hasCoordinatorAccess() {
    return this.coordinator;
  }

  hasSqlOrCoordinatorAccess() {
    return this.hasSql() || this.hasCoordinatorAccess();
  }

  hasOverlordAccess() {
    return this.overlord;
  }

  hasSqlOrOverlordAccess() {
    return this.hasSql() || this.hasOverlordAccess();
  }
}

Capabilities.FULL = new Capabilities({
  queryType: 'nativeAndSql',
  coordinator: true,
  overlord: true,
});
Capabilities.COORDINATOR = new Capabilities({
  queryType: 'none',
  coordinator: true,
  overlord: false,
});
Capabilities.OVERLORD = new Capabilities({
  queryType: 'none',
  coordinator: false,
  overlord: true,
});
