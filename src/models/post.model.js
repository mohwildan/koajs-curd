import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: false,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const postModel = mongoose.model("post", postSchema);
export default postModel;
