import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import {app} from './app.js'
import Cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:5174',
    methods: ['GET', 'HEAD', ' POST', ' PUT', ' DELETE'],
    Credential:true,
}
app.use(Cors(corsOptions))

dotenv.config({
    path: './.env'
});


connectDB()
.then(() => {
 app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is Running  at port : ${process.env.PORT}`);
 })
})
.catch((err) => {
 console.log("Mongo db connection  failed !!! ", err);
})






























