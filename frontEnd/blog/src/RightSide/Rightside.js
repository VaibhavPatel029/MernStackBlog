import { Grid } from '@material-ui/core';
import React from 'react'
import Post from './Post'
import {useSelector} from 'react-redux'
function Rightside() {
    const posts = useSelector((state) => state.posts);
    return (
        <div>
            <h1> TOP &nbsp; ARTICLES</h1>
            {/* {posts.map((post) => (
          
          <Grid key={post._id} item >
            <Post post={post}/>
          </Grid>
        ))} */}
        </div>
    )
}

export default Rightside
