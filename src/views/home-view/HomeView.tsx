import React from 'react';
import { Capabilities } from '../../utils';
import { StatusCard } from './status-card/StatusCard';

import './HomeView.scss';

export interface HomeViewProps {
  capabilities: Capabilities;
}

export const HomeView = React.memo(function HomeView(props: HomeViewProps) {
  const { capabilities } = props;
  
  return (
    <div className="home-view app-view">
      <StatusCard />
      <StatusCard />
      <StatusCard />
      <StatusCard />
      <StatusCard />
      <StatusCard />
    </div>
  );
});