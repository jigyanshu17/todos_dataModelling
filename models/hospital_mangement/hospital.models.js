import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
{
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false 
  },
  createdby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subTodos: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subTodo"
  }// array of subtodo
]

},{ timestamps: true });

export const todo = mongoose.model("Todo" , todoSchema)