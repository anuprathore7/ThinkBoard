import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import connectDB  from './config/db.js';
import dotenv from 'dotenv';
import FirstRateLimiter from './middlewares/FirstRateLimiter.js';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();



dotenv.config();
const app = express();
app.use(express.json()); 
// this is the middleware to parse json data

if (process.env.NODE_ENV !== "production") {
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
}))
}
app.use(FirstRateLimiter);




app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname , "../frontend/dist")));

app.get ("*" , (req,res)=>{
    res.sendFile(path.join(__dirname , "../frontend" ,"dist" ,"index.html"));
    })
}


const PORT = process.env.PORT || 5001;
connectDB().then(()=>{
    app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})
})



