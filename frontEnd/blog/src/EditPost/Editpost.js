import React, { useState, useEffect } from "react";
import {Button, Paper, Typography} from '@material-ui/core'
import FileBase from 'react-file-base64';
import './Editpost.css';
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { createPost, updatePost } from "../actions/posts";


function From({ CurrentId, setCurrentId }) {
  
  const [postData, setPostData] = useState({
    description : '',
    title:'', selectedFile:'' 
  });
  const post = useSelector((state) => CurrentId ? state.posts.find((p) => p._id === CurrentId) : null);
  const dispatch = useDispatch(); 
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();
  useEffect(() => {
    if(post) setPostData(post);
  }, [post])
  const handleSubmit =(e) => {
    e.preventDefault();
    if(CurrentId){
        dispatch(updatePost(CurrentId, {...postData, name: user?.result?.name}));
    }else{
        dispatch(createPost({...postData, name: user?.result?.name}));
    }
    history.push("/");
   }
if (!user?.result?.name) {
    return (
      <Paper>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }
  return (

    <div className="new_post">
      <form autoComplete="off" onSubmit={handleSubmit} noValidate on className="form__item">
        
        <div className="title">
          <h2>Title</h2>
          <Button className="file_button" variant="contained" color="primary" size="large" type="submit" >Update</Button>
        </div>
        <div className="file_textfild">
          <input type="text" 
           name="title"
           value={postData.title}
           onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          ></input>
        </div>
        <div className="description">
          <h2>Description</h2>
          <textarea name="description"
          value={postData.description}
          onChange={(e) => setPostData({ ...postData, description: e.target.value })}
           rows="20" cols="80" />
        </div>
        <div className="fileInpute">
        <FileBase type="file"
        className="file_inpute" 
          multiple={false} 
          onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} 
        />
        </div>
        {/* <div>
          <img src={}></img>
        </div> */}
      </form>
    </div>
  );
}

export default From;
