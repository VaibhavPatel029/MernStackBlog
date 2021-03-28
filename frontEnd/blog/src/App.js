import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import Leftside from "./Posts/Leftside.js";
import Rightside from "./RightSide/Rightside";
import Form from './Form/From';
import Posts from './YourArtical/Posts'
import "./App.css";
import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Post from "./Posts/Post/Post.js";
import Post from './getOnePost/Post';
import Editpost from './EditPost/Editpost'
import Auth from './components/Auth/Auth';
function App() {

  const [CurrentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [CurrentId ,dispatch]);
   
  return (
    <div className="App">
      <Router>
        <Header name="Write" />
        <Switch>
          <Route exact path="/">
            <div className="app_page">
              <Leftside  setCurrentId= {setCurrentId} />
              {/* <Rightside /> */}
            </div>
          </Route>
          <Route exact path="/write">
            <div  className="app_page">
              <Form/>
            </div>
          </Route>
          <Route path="/yourpost">
           <Posts setCurrentId= {setCurrentId} />
          </Route>
          <Route exact path="/getpost">
            <Post CurrentId= {CurrentId} />
          </Route>
          <Route  exact path="/editpost">
            <Editpost setCurrentId= {setCurrentId} CurrentId= {CurrentId}/> 
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
