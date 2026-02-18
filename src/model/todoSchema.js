import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({ // new mongoose.Schema({}) Defines how data looks inside MongoDB.
    title:{
        type: String,
        required: true
    } 
}, {timestamps: true})
export default mongoose.model("newTodo" , todoSchema) //Creates collection.