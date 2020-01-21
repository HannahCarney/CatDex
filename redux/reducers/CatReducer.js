import { ADD_CAT, DELETE_CAT } from '../types';

// put this in a MOCKDB
const INITIAL_STATE = {
  current: [
    {
      'name': 'Goose',
      'breed': 'Flerken',
      'uri': 'https://www.thewrap.com/wp-content/uploads/2019/03/Goose-the-Cat-Captain-Marvel.jpg',
      'id': 9192101
    },
    {
      'name': 'Grumpy Cat',
      'breed': 'Ragdoll',
      'uri': 'https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/master/w_2560%2Cc_limit/Culture-Grumpy-Cat-487386121-2.jpg',
      'id': 9192102

    },
    {
      'name': 'Crookshanks',
      'breed': 'Himalayan',
      'uri': 'https://images.ctfassets.net/usf1vwtuqyxm/1VewXrez2U26IIaOUOm0Uo/9257ef81ac9e419a0ec9560d5b50fa8f/WB_F3_Crookshanks_SOLOcrop_C240_51_UP_HPE3.jpg',
      'id': 9192103
    },
    {
      'name': 'Mr. Bigglesworth',
      'breed': 'Sphynx',
      'uri': 'https://media.giphy.com/media/l0Iy7pyNgLTcJIUsE/giphy-facebook_s.jpg',
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
      current.splice(0, 0, content);
      const newState = { current };
      return newState;
    case DELETE_CAT:
      var { id } = action.payload;
      for (index in current) {
        if (current[index].id == id) {
          current.splice(index, 1);
        }
      }
      const newDelState = { current };
      return newDelState;
    default:
      return state;
  }
};

export default catReducer