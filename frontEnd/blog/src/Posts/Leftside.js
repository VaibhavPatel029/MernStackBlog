import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  CircularProgress,
} from "@material-ui/core";
import "./Leftside.css";
import { useSelector } from "react-redux";
import Post from './Post/Post'
const useStyles = makeStyles({
  root: {
    padding: 0,
    maxWidth: 900,
    flex: 0.75,
    alignItems: "center",
    opacity: 0.6,
  },
  item: {
    color: "black",
  },
});

export default function ImgMediaCard( { setCurrentId } ) {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
    !posts.length ? <CircularProgress/> : (
      
      <div className="leftside">
      
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          
          <Grid key={post._id} item >
            <Post post={post} setCurrentId= {setCurrentId} />
          </Grid>
        ))}
      </Grid>
      
    </div>
    )
    
  );
}
