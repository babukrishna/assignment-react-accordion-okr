import { combineReducers } from 'redux';
import { FETCH_DATA } from '../actions/types';

const fetctData = (state={}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  fetctData
})