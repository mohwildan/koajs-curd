import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  author: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  postid: {
    type: String,
    require: true,
  },
});

const likeModel = mongoose.model("like", likeSchema);
export default likeModel;
