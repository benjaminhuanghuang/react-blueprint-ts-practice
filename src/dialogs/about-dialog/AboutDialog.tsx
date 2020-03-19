import { AnchorButton, Button, Classes, Dialog, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import React from 'react';

import { ExternalLink } from '../../components';
import {
  COMMUNITY,
  DEVELOPER_GROUP,
  USER_GROUP,
  WEBSITE,
} from '../../variables';


export interface AboutDialogProps {
  onClose: () => void;
}

export const AboutDialog = React.memo(function AboutDialog(props:AboutDialogProps) {
  const { onClose } = props;

  return (
    <Dialog
      className="about-dialog"
      icon={IconNames.GRAPH}
      onClose={onClose}
      title="About"
      isOpen
      canEscapeKeyClose
    >
      <div className={Classes.DIALOG_BODY}>
        <p>
          <strong>
            This is a project for learning React, Redux
          </strong>
        </p>
        <p>
          For help and support, please refer to the{' '}
          <ExternalLink href={WEBSITE}>community page</ExternalLink> and the{' '}
          <ExternalLink href={WEBSITE}>user groups</ExternalLink>.
        </p>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button onClick={onClose}>Close</Button>
          <AnchorButton intent={Intent.PRIMARY} href={WEBSITE} target="_blank">
            Visit Github
          </AnchorButton>
        </div>
      </div>
    </Dialog>
  );
});