import { applyMiddleware, createStore } from 'redux';
//
import reducer from './reducer';

const getMiddleware = () => {
  
};

export const store = createStore(reducer, getMiddleware());