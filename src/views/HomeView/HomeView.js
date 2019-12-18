import React from 'react';

import { StatusCard } from './StatusCard/StatusCard';

import './HomeView.scss';

const HomeView = (props) => {
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
};

export default HomeView;