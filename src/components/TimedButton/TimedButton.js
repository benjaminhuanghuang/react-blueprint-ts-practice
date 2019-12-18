import { Button, ButtonGroup, IButtonProps, Popover, Radio, RadioGroup } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import React from 'react';


import './TimedButton.scss';


export class TimedButton extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      interval: 5000,
    };
  }

  
  componentDidMount() {
  }

  componentWillUnmount() {
  
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = undefined;
  }

  continuousRefresh = (selectedInterval) => {
    if (selectedInterval) {
      this.timer = setTimeout(() => {
        this.props.onRefresh(true);
        this.continuousRefresh(selectedInterval);
      }, selectedInterval);
    }
  };

  handleSelection = (e) => {
    
    this.continuousRefresh(selectedInterval);
  };

  render() {
    const {
      label,
      intervals,
      onRefresh,
      type,
      text,
      icon,
      defaultValue,
      localStorageKey,
      ...other
    } = this.props;
    
    const { interval } = this.state;

    return (
      <ButtonGroup>
        <Button {...other} text={text} icon={icon} onClick={() => onRefresh(false)} />
        <Popover
          content={
            <RadioGroup
              label={label}
              className="timed-button"
              onChange={this.handleSelection}
              selectedValue={interval}
            >
              {intervals.map((interval) => (
                <Radio label={interval.label} value={interval.value} key={interval.label} />
              ))}
            </RadioGroup>
          }
        >
          <Button {...other} rightIcon={IconNames.CARET_DOWN} />
        </Popover>
      </ButtonGroup>
    );
  }
}
