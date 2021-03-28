import express from 'express';

import { getPosts, createPost, updatePost, deletePost , getOnePost} from '../controllers/posts.js'
const router = express.Router();
import auth from '../middleware/auth.js';

router.get('/', getPosts);
router.post('/',createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/:id', getOnePost);
export default router;
