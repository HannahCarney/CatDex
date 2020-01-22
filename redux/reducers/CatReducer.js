import { ADD_CAT, DELETE_CAT } from '../types';
import { InitialState } from '../catJson.js';

const catReducer = (state = InitialState, action) => {
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