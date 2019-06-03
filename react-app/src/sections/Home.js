import React, { Component } from "react";
class Home extends Component {
  state = {
    posts: []
  };
  loadPosts = () => {
    fetch("/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  };
  componentDidMount() {
    this.loadPosts();
  }
  render() {
    return (
      <div>
        {this.state.posts.map(x => {
          return <div>{x.author}</div>;
        })}
      </div>
    );
  }
}

export default Home;
