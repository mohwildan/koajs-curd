import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  postid: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    require: true,
  },
});

const commentModel = mongoose.model("comment", commentSchema);
export default commentModel;
