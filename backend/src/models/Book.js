import mongoose,{Schema} from "mongoose";

const bookSchema = new Schema(
  {
    title:{
      type:String,
      required: true, 
    }, 
    caption:{
      type:String,
      required: true, 
    }, 
    image:{
      type:String,
      required: true, 
    },
    rating:{
      type:Number,
      required: true,
      min:1, 
      max: 5, 
    },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true
    },
  },
  {timestamps: true})

export const Book = mongoose.model("Book", bookSchema); 
// Creating a Mongoose model named "Book" based on the schema defined earlier in the file.
// The model acts as a blueprint for documents in the "books" collection in MongoDB
export default Book; 
// Exporting the "Book" model as the default export of this module.
// This allows other files to import it without using curly braces.