import * as React from "react";
import { IconButton } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import { Markup } from "interweave";
import Delete from "@material-ui/icons/Delete";


const PostList = (props: any) => {
  const [state, setState] = React.useState({
    posts: []
  });
  React.useEffect(() => {
    getPosts(props.selectedBlog);
  }, []);
  const getPosts = (blogId: any) => {
    var APIKey = "AIzaSyCoYdGRYle9GBMjeHtYGd2aYx03aWFVQpg";
    var bloggerAPIURL =
      "https://www.googleapis.com/blogger/v3/blogs/" +
      blogId +
      "/posts?key=" +
      APIKey;
    fetch(bloggerAPIURL)
      .then((ret: any) => {
        return ret.json();
      })
      .then((result: any) => {
        const newState = { ...state, posts: result.items };
        setState(newState);

        // setState(newState);
      })
      .catch(error => {
        console.log(error);
      });
  };
  console.log(props);
  return (
    <div>
      <h2> {props.data[0].title}</h2>
      <div className="bloggerIcon">
        <IconButton>
          <Edit />
        </IconButton>
        <IconButton>
          <Delete />
        </IconButton>
      </div>
      <div className="postDetails">
        {state.posts.map((post: any, i: any) => (
          <div className="singlePost">
            <div>{post.title} </div>
            <Markup content={post.content} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostList;
