
import { IconNames } from '@blueprintjs/icons';
import axios from 'axios';
import React from 'react';

import { StatusDialog } from '../../../dialogs/';
import { HomeViewCard } from '../home-view-card/HomeViewCard';

export interface StatusCardProps {}

export interface StatusCardState {
  statusLoading: boolean;
  version?: string;
  extensionCount?: number;
  statusError?: string;

  showStatusDialog: boolean;
}

interface StatusSummary {
  version: string;
  extensionCount: number;
}

export class StatusCard extends React.PureComponent<StatusCardProps, StatusCardState> {

  constructor(props: StatusCardProps, context: any) {
    super(props, context);
    
    this.state = {
      statusLoading: true,
      showStatusDialog: false,
    };
  }

  componentDidMount() {
    // this.versionQueryManager.runQuery(null);
  }

  componentWillUnmount() {
    // this.versionQueryManager.terminate();
  }

  handleStatusDialogOpen = () => {
    this.setState({ showStatusDialog: true });
  };

  handleStatusDialogClose = () => {
    this.setState({ showStatusDialog: false });
  };

  renderStatusDialog() {
    const { showStatusDialog } = this.state;
    if (!showStatusDialog) return;

    return <StatusDialog onClose={this.handleStatusDialogClose} />;
  }

  render() {
    const { version, extensionCount, statusLoading, statusError } = this.state;

    return (
      <>
        <HomeViewCard
           className="status-card"
           onClick={this.handleStatusDialogOpen}
           icon={IconNames.GRAPH}
           title="Status"
           loading={statusLoading}
           error={statusError}
        >
          {version && <p>{`Apache Druid is running version ${version}`}</p>}
        </HomeViewCard>
        {this.renderStatusDialog()}
      </>
    );
  }
}