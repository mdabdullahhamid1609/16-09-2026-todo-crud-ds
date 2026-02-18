import express from 'express'; // it help convert js obj into mongodb docs  Mongoose is an ODM (Object Data Modeling)
import { dbConnect } from './src/config/db.Connect.js'; // connect url
import todoRoute from './src/routes/todoRoutes.js';
import dotenv from "dotenv";
dotenv.config();
const app = express()
const port = process.env.PORT || 8000;


app.use(express.json()) //Middleware. // It converts JSON body → JavaScript object. Without this req.body will be undefined.
app.use('/', todoRoute)

  
dbConnect()
app.listen(port , ()=> {
    console.log(`server is running at port ${port}`)
})

// //
// Add completed: Boolean
// Add createdAt
// Add pagination
// Add search by title
// Add filtering by completed