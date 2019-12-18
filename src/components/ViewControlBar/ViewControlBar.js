import React from 'react';

import './ViewControlBar.scss';

const ViewControlBar = React.memo(function ViewControlBar(props) {
  const { label, children } = props;

  return (
    <div className="view-control-bar">
      <div className="control-label">{label}</div>
      {children}
    </div>
  );
});

export default ViewControlBar;
