import express from "express";
import bodyParser from "body-parser";
import db from "./config/pgDB.js";
import cors from "cors";
import env from "dotenv";
import authRouter from "./routes/authRoutes.js";
const app=express()
env.config()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin:process.env.CORS_ORIGIN_URL
}));
app.use("/auth",authRouter);
db.connect().then(()=>{
  console.log("connected to database")
})
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})
