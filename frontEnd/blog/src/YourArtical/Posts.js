import React from 'react'
import Post from './Post/Post'
import './styles.css'
import { useSelector } from "react-redux";
import { Grid } from '@material-ui/core';
import { Route } from 'react-router';
function Posts({setCurrentId}) {
    const posts = useSelector((state) => state.posts);
    return (
        <div className="posts">
            <div className="posts__titel">
                <hr/>
                <h3> Your Submitted Articals</h3>
                <hr/>
            </div>
                {posts.map((post) => (
                
                <div key={post._id} className="posts__post" >
                    <Post post={post} setCurrentId= {setCurrentId} />
                </div>
                ))}
        </div>
    )
}

export default Posts
