import { RECEIVE_POSTS, REQUEST_POSTS } from "./actionTypes";

export const fetchPosts = () => dispatch => {
  dispatch({
    type: REQUEST_POSTS
  });
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: RECEIVE_POSTS,
        payload: json
      })
    );
};
