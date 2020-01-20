

import { combineReducers } from 'redux';
import { ADD_CAT } from '../types';
import { createForms } from 'react-redux-form'

const initialCatState = {};


const INITIAL_STATE = {
  current: [
    { 'name': 'Goose' },
    { 'name': 'Grumpy Cat' },
    { 'name': 'Crookshanks' },
    { 'name': 'Mr. Bigglesworth' }
  ]
};

const catReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CAT:
      const {
        current
      } = state;
      const { id, content } = action.payload;
      current.push({ 'name' : content})
      const newState = { current };
      return newState;
    default:
      return state;
  }
};

export default catReducer