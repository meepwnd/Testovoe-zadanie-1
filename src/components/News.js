import React from "react";
import { fetchPosts } from "../actions/actions";
import { connect } from "react-redux";

class News extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <div>
        <h1>News</h1>
        {this.props.posts.slice(0, 10).map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(News);
