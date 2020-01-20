

import { ADD_CAT } from '../types';

// put this in a MOCKDB
const INITIAL_STATE = {
  current: [
    { 'name': 'Goose',
      'breed': 'Flerken' },
    { 'name': 'Grumpy Cat',
      'breed': 'Ragdoll' },
    { 'name': 'Crookshanks',
     'breed': 'Himalayan' },
    { 'name': 'Mr. Bigglesworth',
     'breed':  'Sphynx'}
  ]
};

const catReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CAT:
      const {
        current
      } = state;
      const { id, content } = action.payload;
      current.push(content);
      const newState = { current };
      return newState;
    default:
      return state;
  }
};

export default catReducer