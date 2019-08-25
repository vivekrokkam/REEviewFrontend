import { IconButton } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import AddCircle from "@material-ui/icons/AddCircle";
import * as React from "react";
import axios from "axios";
import BlogList from "./BlogList";

const Header = props => {
  React.useEffect(() => {
    getBlogInfo();
  }, []);
  const getBlogInfo = () => {
    axios("https://bloggerzapi.azurewebsites.net/api/Bloggers", {
      method: "GET"
    })
      .then((ret: any) => {
        return ret.json();
      })
      .then((result: any) => {
        console.log(result);
        var newState = {
          blogs: result,
          searchText: "",
          selectedBlog: result[0].postRefId
        };
        //const newState = { ...state, blogs: result };
        setState(newState);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const addBlog = () => {
    console.log(document.getElementById("Search-Bar").value);
    fetch("https://bloggerzapi.azurewebsites.net/api/Bloggers", {
      body: document.getElementById("Search-Bar").value,
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => {
        return console.log(response);
      })
      .then(answer => {})
      .catch(error => {
        console.log(error);
        getBlogInfo();
      });
  };
  const changevalue = () => {};
  const [state, setState] = React.useState({
    searchText: "",
    blogs: [],
    selectedBlog: 0
  });

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-2 justify-content-center align-self-center">
            <h1>Blogger</h1>
          </div>
          <div className="col-10">
            <TextField
              id="Search-Bar"
              className="SearchBar"
              placeholder="Add Video Url"
              margin="normal"
              variant="outlined"
              onChange={changevalue}
              //value ={state.searchText}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={addBlog}>
                      <AddCircle />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div className="col-4 ">
            {state.blogs.length > 0 && (
              <BlogList data={state.blogs} selectedBlog={state.selectedBlog} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
