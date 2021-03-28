import React from "react";
import moment from 'moment';
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Card,
  Link,
} from "@material-ui/core";
import {useDispatch, useSelector} from 'react-redux'
import { findpost } from '../actions/posts'
const useStyles = makeStyles({
  root: {
    padding: 0,
    maxWidth: 900,
    flex: 1,
    alignItems: "center",
    // opacity: 1,
    
  },
  item: {
    color: "black",
  },
  main: {
      display: "flex",
      justifyContent:"center",
      alignItems:"center",
  },
   media: {
    height: "400px",
    width: "100%"
    // paddingTop: '56.25%', // 16:9
  },

});
function Post({CurrentId}) {

    const post = useSelector((state) => CurrentId ? state.posts.find((p) => p._id === CurrentId) : null);
    const dispatch = useDispatch(); 

    const classes = useStyles();
  return (
      <div className={classes.main}>
    <Card className={classes.root}>
      
        {/* <CardMedia
        className={classes.media}
          component="img"
          alt="Contemplative Reptile"
        //   height="200"
          image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
          title={post.title}
          
        /> */}
        <img className={classes.media} src={post.selectedFile}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography
          paragraph
            className={classes.item}
            variant="body2"
            color="textSecondary"
            component="p"
          >
           {post.description}
          </Typography>
        </CardContent>
      
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        {/* <div className="last_button">
        <Link to="/">
          <Button size="small" color="primary" onClick={() => {}}>
            back
          </Button>
        </Link>
          <p>{moment(post.createdAt).fromNow()}</p>
        </div> */}
      </CardActions>
    </Card>
    </div>
  );
}

export default Post;
