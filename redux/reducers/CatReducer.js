

import { combineReducers } from 'redux';
import { ADD_CAT } from '../types';

const INITIAL_STATE = {
    current: [
    'Goose',
    'Grumpy Cat',
    'Crookshanks',
    'Mr. Bigglesworth',]
  };

const catReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CAT:
      const {
        current
      } = state;
      current.push("cat");
      const newState = { current }
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
    cats: catReducer,
  });