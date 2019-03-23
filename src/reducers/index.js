import { REQUEST_POSTS, RECEIVE_POSTS } from "../actions/actionTypes";
const initialState = {
  isFetching: false,
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POSTS:
      return {
        isFetching: false,
        posts: action.payload
      };
    default:
      return state;
  }
};
