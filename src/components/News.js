import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { fetchPosts } from "../actions/actions";
import { connect } from "react-redux";

const News = props => {
  useEffect(() => {
    props.dispatch(fetchPosts());
  }, []);
  return props.isFetching ? (
    <p>loadiing...</p>
  ) : (
    <>
      <h1>News</h1>
      {props.posts.slice(0, 10).map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  posts: state.posts,
  isFetching: state.isFetching
});

News.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(News);
