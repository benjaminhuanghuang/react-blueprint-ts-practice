
import { Button, Classes, Dialog, FormGroup, InputGroup, Intent } from '@blueprintjs/core';
import axios from 'axios';
import React from 'react';
import ReactTable, { Filter } from 'react-table';

import { Loader } from '../../components/';
import { UrlBaser } from '../../singletons';


import './StatusDialog.scss';


interface StatusResponse {
  version: string;
  modules: any[];
}

interface StatusDialogProps {
  onClose: () => void;
}

interface StatusDialogState {
  response?: StatusResponse;
  loading: boolean;
  error?: string;
}

export class StatusDialog extends React.PureComponent<StatusDialogProps, StatusDialogState> {
  static anywhereMatcher(filter: Filter, row: any) {
    return String(row[filter.id]).includes(filter.value);
  }
  
  constructor(props: StatusDialogProps, context: any) {
    super(props, context);
    this.state = {
      loading: true,
    };

    // this.showStatusQueryManager = new QueryManager({
    //   processQuery: async () => {
    //     const resp = await axios.get(`/status`);
    //     return resp.data;
    //   },
    //   onStateChange: ({ result, loading, error }) => {
    //     this.setState({
    //       loading,
    //       response: result,
    //       error,
    //     });
    //   },
    // });
  }

  componentDidMount() {
    //this.showStatusQueryManager.runQuery(null);
  }

  renderContent() {
    const { response, loading, error } = this.state;

    if (loading) return <Loader loading />;

    if (error) return <span>{`Error while loading status: ${error}`}</span>;

    if (response) {
      return (
        <>
          <FormGroup label="Version" labelFor="version" inline>
            <InputGroup id="version" defaultValue={response.version} readOnly />
          </FormGroup>
          <ReactTable
            data={response.modules}
            columns={[
              {
                columns: [
                  {
                    Header: 'Extension name',
                    accessor: 'artifact',
                    width: 200,
                  },
                  {
                    Header: 'Fully qualified name',
                    accessor: 'name',
                  },
                  {
                    Header: 'Version',
                    accessor: 'version',
                    width: 200,
                  },
                ],
              },
            ]}
            loading={loading}
            filterable
            defaultFilterMethod={StatusDialog.anywhereMatcher}
          />
        </>
      );
    }

    return;
  }

  render() {
    const { onClose } = this.props;

    return (
      <Dialog className={'status-dialog'} onClose={onClose} isOpen title="Status">
        <div className={'status-dialog-main-area'}>{this.renderContent()}</div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className="viewRawButton">
            <Button
              text="View raw"
              minimal
              onClick={() => window.open(UrlBaser.base(`/status`), '_blank')}
            />
          </div>
          <div className="closeButton">
            <Button text="Close" intent={Intent.PRIMARY} onClick={onClose} />
          </div>
        </div>
      </Dialog>
    );
  }
}
