import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import connectDB  from './config/db.js';
import dotenv from 'dotenv';
import FirstRateLimiter from './middlewares/FirstRateLimiter.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json()); // this is the middleware to parse json data
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
}))
app.use(FirstRateLimiter);




app.use("/api/notes", notesRoutes);



connectDB().then(()=>{
    app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})
})



