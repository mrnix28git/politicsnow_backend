import express from 'express';
import cors from "cors"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORI,
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

import userRouter from './routes/user.routes.js';

app.use('/api/v1/users', userRouter)


export { app }