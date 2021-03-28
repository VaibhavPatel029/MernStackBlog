
  
import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'
const router = express.Router();


export const getPosts = async (req , res) => {
    try{
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
    }catch{
        res.status(400).json({massage : error.massage});
    }
}

export const createPost = async (req , res) => {
    const post = req.body;
    const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() });
    try{
        await newPost.save();
        res.status(200).json(newPost);
    }catch{
        res.status(409).json({massage : error.massage});
    }
}

export const updatePost = async( req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No Post with that id');
    }

   const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id} , {new: true} );
    res.json(updatePost);

}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const getOnePost = async (req, res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No Post with that id');
    }
    const post = await PostMessage.findById(id);
    res.json(post);
    
}