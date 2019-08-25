import * as React from "react";
import PostList from "./PostList";

const BlogList = (props: any) => {
  const [state, setState] = React.useState({
    selectedBlog: props.selectedBlog
  });

  const changeSelection = (blog: any) => {
    var APIKey = "AIzaSyCoYdGRYle9GBMjeHtYGd2aYx03aWFVQpg";
    var bloggerAPIURL =
      "https://www.googleapis.com/blogger/v3/blogs/" +
      blog.postRefId +
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
    <div className="bloggerContainer">
      <div className="bloggerListContainer">
        {props.data.map((blog: any, i: any) => (
          <button
            className="blogger"
            key={i}
            onClick={() => changeSelection(blog)}
          >
            <div className="bloggerLabel">
              <div className="bloggerTitle">
                <a href={blog.description} target="_blank">
                  {blog.title}
                </a>
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="bloggerDetailContainer">
        {props.data && (
          <PostList data={props.data} selectedBlog={state.selectedBlog} />
        )}
      </div>
    </div>
  );
};
export default BlogList;
