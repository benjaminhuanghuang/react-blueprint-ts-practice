import React from 'react';
import { Button, ButtonGroup, Intent, Label, MenuItem } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import axios from 'axios';
import ReactTable from 'react-table';
import { Filter } from 'react-table';
//
import ViewControlBar from '../../components/ViewControlBar/ViewControlBar'

export class JobsView extends React.PureComponent{

  constructor(props:any, context:any) {
    super(props, context);
    this.state = {
      servicesLoading: true,
      serviceFilter: [],

      // hiddenColumns: new LocalStorageBackedArray<string>(
      //   LocalStorageKeys.SERVICE_TABLE_COLUMN_SELECTION,
      // ),
    };

    // this.serviceQueryManager = new QueryManager();
  }

  componentDidMount() {
    // const { capabilities } = this.props;
    // this.serviceQueryManager.runQuery(capabilities);
  }

  componentWillUnmount() {
    // this.serviceQueryManager.terminate();
  }

  renderServicesTable() {
    
  }

  render() {
    // const { capabilities } = this.props;
    // const { groupServicesBy, hiddenColumns } = this.state;

    return (
      // <div className="jobs-view app-view">
      //   <ViewControlBar label="Jobs">
      //     <Label>Group by</Label>
      //     <ButtonGroup>
      //       <Button
      //         active={!groupServicesBy}
      //         onClick={() => this.setState({ groupServicesBy: undefined })}
      //       >
      //         None
      //       </Button>
      //       <Button
      //         active={groupServicesBy === 'service_type'}
      //         onClick={() => this.setState({ groupServicesBy: 'service_type' })}
      //       >
      //         Type
      //       </Button>
      //       <Button
      //         active={groupServicesBy === 'tier'}
      //         onClick={() => this.setState({ groupServicesBy: 'tier' })}
      //       >
      //         Tier
      //       </Button>
      //     </ButtonGroup>
      //     {/* <RefreshButton
      //       onRefresh={auto => this.serviceQueryManager.rerunLastQuery(auto)}
      //       localStorageKey={LocalStorageKeys.SERVICES_REFRESH_RATE}
      //     /> */}
      //     {/* {this.renderBulkServicesActions()} */}
      //     {/* <TableColumnSelector
      //       columns={tableColumns[capabilities.getMode()]}
      //       onChange={column =>
      //         this.setState(prevState => ({
      //           hiddenColumns: prevState.hiddenColumns.toggle(column),
      //         }))
      //       }
      //       tableColumnsHidden={hiddenColumns.storedArray}
      //     /> */}
      //   </ViewControlBar>
      //   {/* {this.renderServicesTable()}
      //   {this.renderDisableWorkerAction()}
      //   {this.renderEnableWorkerAction()} */}
      // </div>
      <div>JobsView</div>
    );
  }
}


