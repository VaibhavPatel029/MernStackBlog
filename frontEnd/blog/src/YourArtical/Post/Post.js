import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './styles.css'
import {Link , Redirect} from 'react-router-dom'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import From from '../../Form/From';
import { deletePost } from '../../actions/posts'

function Post({post, setCurrentId}) {
    const dispatch = useDispatch();
    function changID(){
        setCurrentId(post._id);
        console.log(post._id);
    }
    return (
         
            <div class="posts__content">
                <div className="posts__img">
                    <img className="img_id" src={post.selectedFile} alt="postImg"/>
                </div>
                <div className="posts__middle">
                    <h3>{post.title}</h3>
                    <h5> {post.description.substring(0,500) + "..."}</h5>
                </div>
                <div className="posts__right">
               
                <Link to={'/editpost'}>
                   <Button  size="small" onClick={changID}>
                      <EditIcon fontSize="default" />
                   </Button>
                   {/* <Redirect to="/editpost"></Redirect> */}
                </Link>
               
                   <Button  size="small" onClick={() => dispatch(deletePost(post._id))}>
                       <DeleteIcon fontSize="default" />
                   </Button>
            
                </div>
            </div>
    )
}


export default Post
