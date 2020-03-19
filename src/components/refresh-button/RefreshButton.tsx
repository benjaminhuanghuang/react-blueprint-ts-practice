import { IconNames } from '@blueprintjs/icons';
import React from 'react';

import { LocalStorageKeys } from '../../utils';
import { TimedButton } from '../time-button/TimedButton';

export interface RefreshButtonProps {
  onRefresh: (auto: boolean) => void;
  localStorageKey?: LocalStorageKeys;
}

export const RefreshButton = React.memo(function RefreshButton(props: RefreshButtonProps) {
  const { onRefresh, localStorageKey } = props;
  const intervals = [
    { label: '5 seconds', value: 5000 },
    { label: '10 seconds', value: 10000 },
    { label: '30 seconds', value: 30000 },
    { label: '1 minute', value: 60000 },
    { label: '2 minutes', value: 120000 },
    { label: 'None', value: 0 },
  ];

  return (
    <TimedButton
      defaultValue={30000}
      label="Auto refresh every:"
      intervals={intervals}
      icon={IconNames.REFRESH}
      text="Refresh"
      onRefresh={onRefresh}
      localStorageKey={localStorageKey}
    />
  );
});
