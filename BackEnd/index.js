import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();



app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// Routes
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const CONNECTION_URL = 'mongodb+srv://vaibhav:vaibhav1234@blog1.qcmvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})
const PORT = process.env.PORT || 3500;
mongoose.set('useFindAndModify', false);
//Server
app.listen(PORT, ()=>{

    console.log(`server is running http://localhost:${PORT}`);
})
