// React + Redux
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Test library
import { shallow, mount, render } from "enzyme";
import mockStore from 'redux-mock-store';

// App
import reducers from '../../src/reducers';
import App from "../../src/components/App";

// Group the test
describe("App", () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other New Comment'] };
    component = mount(<App name="app" store={createStore(reducers, props)}/>);
  });

  it("it renders props correctly", () => {
    expect(component.props().name).toBe('app');
  });

  // Test one attribute
  it("shows the correct text", () => {
    expect(component.find('h2').text()).toBe("React simple starter");
  });

  it("renders 1 App component", () => {
    expect(component).toHaveLength(1);
  });
});
