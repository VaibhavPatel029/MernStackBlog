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
} from "@material-ui/core";
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    padding: 0,
    maxWidth: 900,
    flex: 0.75,
    alignItems: "center",
    opacity: 1,
  },
  item: {
    color: "black",
  },
});
function Post({post , setCurrentId}) {
    const classes = useStyles();
    
  return (
    <Card className={classes.root}>
      
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
          title={post.title}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography
            className={classes.item}
            variant="body2"
            color="textSecondary"
            component="p"
          >
           {post.description.substring(0,500) + "..."}
          </Typography>
        </CardContent>
    
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <div className="last_button">
        <Link to = "/getpost">
          <Button size="small" color="primary" onClick={() => setCurrentId(post._id)}>
            Learn More
          </Button>
        </Link>
          <p>{moment(post.createdAt).fromNow()}</p>
        </div>
      </CardActions>
    </Card>
  );
}

export default Post;
