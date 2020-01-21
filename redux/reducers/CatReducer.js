

import { ADD_CAT, DELETE_CAT } from '../types';

// put this in a MOCKDB
const INITIAL_STATE = {
  current: [
    {
      'name': 'Goose',
      'breed': 'Flerken',
      'id': 9192101
    },
    {
      'name': 'Grumpy Cat',
      'breed': 'Ragdoll',
      'id': 9192102

    },
    {
      'name': 'Crookshanks',
      'breed': 'Himalayan',
      'id': 9192103
    },
    {
      'name': 'Mr. Bigglesworth',
      'breed': 'Sphynx',
      'id': 9192104
    }
  ]
};

const catReducer = (state = INITIAL_STATE, action) => {
  const {
    current
  } = state;
  switch (action.type) {
    case ADD_CAT:
      var { id, content } = action.payload;
      content.id = id;
      current.push(content);
      const newState = { current };
      return newState;
    case DELETE_CAT:
      var { id } = action.payload;
      console.log(id);
      for (index in current) {
        if (current[index].id == id) {
          console.log(current[index])

          current.splice(index, 1);
          console.log(current);
        }
      }
      const newDelState = { current };
      return newDelState;
    default:
      return state;
  }
};

export default catReducer