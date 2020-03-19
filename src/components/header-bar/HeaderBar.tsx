import React, { useState } from 'react';
//
import {
  Alignment,
  AnchorButton,
  Button,
  Intent,
  Menu,
  MenuItem,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  Popover,
  Position,
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
// 
import logo from '../../logo.svg';
//
import { AboutDialog } from '../../dialogs';
import { Capabilities } from '../../utils';

import {
  COMMUNITY,
  DEVELOPER_GROUP,
  USER_GROUP,
  WEBSITE,
} from '../../variables';
//
import './HeaderBar.scss';

export type HeaderActiveTab =
  | null
  | 'load-data'
  | 'ingestion'
  | 'datasources'
  | 'segments'
  | 'services'
  | 'query'
  | 'lookups'
  | 'users'
  | 'jobs';


export interface HeaderBarProps {
  active: HeaderActiveTab;
  capabilities: Capabilities;
}

export const HeaderBar = React.memo(function HeaderBar(props: HeaderBarProps) {
  const { active, capabilities } = props;
  // React hook for dialogs
  const [aboutDialogOpen, setAboutDialogOpen] = useState(false);
  const [doctorDialogOpen, setDoctorDialogOpen] = useState(false);
  const [coordinatorDynamicConfigDialogOpen, setCoordinatorDynamicConfigDialogOpen] = useState(false);
  const [overlordDynamicConfigDialogOpen, setOverlordDynamicConfigDialogOpen] = useState(false);

  const loadDataPrimary = false;

  const configMenu = (
    <Menu>
      <MenuItem
        icon={IconNames.PULSE}
        text="User profile"
      />
      <MenuItem
        icon={IconNames.SETTINGS}
        text="Settings..."
      />
      <MenuItem
        icon={IconNames.WRENCH}
        text="To do..."
      />
      <MenuItem
        icon={IconNames.LOG_OUT}
        text="Log out"
        href="#login"
        onClick={() => setOverlordDynamicConfigDialogOpen(true)}
      />
    </Menu>
  );

  const helpMenu = (
    <Menu>
      <MenuItem icon={IconNames.GRAPH} text="About" onClick={() => setAboutDialogOpen(true)} />
      <MenuItem icon={IconNames.TH} text="Docs" href={USER_GROUP} target="_blank" />
      <MenuItem icon={IconNames.USER} text="User group" href={USER_GROUP} target="_blank" />
      <MenuItem icon={IconNames.CHAT} text="ASF Slack channel" href={USER_GROUP} target="_blank" />
      <MenuItem icon={IconNames.GIT_BRANCH} text="GitHub" href={USER_GROUP} target="_blank" />
    </Menu>
  );

  return (
    <Navbar className="header-bar">
      <NavbarGroup align={Alignment.LEFT}>
        <a href="#"> <img src={logo} className="app-logo" /> </a>
        <NavbarDivider />
        <AnchorButton
          icon={IconNames.USER}
          text="Users"
          active={active === 'users'}
          href="#users"
          minimal={!loadDataPrimary}
          intent={loadDataPrimary ? Intent.PRIMARY : Intent.NONE}
          disabled={false} //{!capabilities.hasEverything()}
        />
        <NavbarDivider />
        <AnchorButton
          minimal
          active={active === 'jobs'}
          icon={IconNames.GANTT_CHART}
          text="Jobs"
          href="#jobs"
          disabled={false} //{!capabilities.hasSqlOrOverlordAccess()}
        />
        <AnchorButton
          minimal
          active={active === 'datasources'}
          icon={IconNames.MULTI_SELECT}
          text="Datasources"
          href="#datasources"
          disabled={false} //{!capabilities.hasSqlOrCoordinatorAccess()}
        />
        <AnchorButton
          minimal
          active={active === 'segments'}
          icon={IconNames.STACKED_CHART}
          text="Segments"
          href="#segments"
          disabled={false} //{!capabilities.hasSqlOrCoordinatorAccess()}
        />
        <AnchorButton
          minimal
          active={active === 'services'}
          icon={IconNames.DATABASE}
          text="Services"
          href="#services"
          disabled={false} //{!capabilities.hasSqlOrCoordinatorAccess()}
        />

        <NavbarDivider />
        <AnchorButton
          minimal
          active={active === 'query'}
          icon={IconNames.APPLICATION}
          text="Query"
          href="#query"
          disabled={false} //{!capabilities.hasQuerying()}
        />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        {/* <RestrictedMode capabilities={capabilities} /> */}
        <Popover content={configMenu} position={Position.BOTTOM_RIGHT}>
          <Button minimal icon={IconNames.COG} />
        </Popover>
        <Popover content={helpMenu} position={Position.BOTTOM_RIGHT}>
          <Button minimal icon={IconNames.HELP} />
        </Popover>
      </NavbarGroup>
      {aboutDialogOpen && <AboutDialog onClose={() => setAboutDialogOpen(false)} />}
      {/* {doctorDialogOpen && <DoctorDialog onClose={() => setDoctorDialogOpen(false)} />} */}
      {/* {coordinatorDynamicConfigDialogOpen && (<CoordinatorDynamicConfigDialogonClose={() => setCoordinatorDynamicConfigDialogOpen(false)}/>)}
      {overlordDynamicConfigDialogOpen && (<OverlordDynamicConfigDialog onClose={() => setOverlordDynamicConfigDialogOpen(false)} />)} */}
    </Navbar>
  );
});
