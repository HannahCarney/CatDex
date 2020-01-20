

import { combineReducers } from 'redux';
import { ADD_CAT } from '../types';

const INITIAL_STATE = {
    current: [],
    possible: [
      'Goose',
      'Grumpy Cat',
      'Crookshanks',
      'Mr. Bigglesworth',
    ],
  };

const catReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CAT:
      // ...
    default:
      return state;
  }
};

export default combineReducers({
    cats: catReducer,
  });