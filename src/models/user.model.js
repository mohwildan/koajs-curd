import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  image_profile: {
    type: String,
    require: false,
  },
  cloudinari_id: {
    type: String,
    require: false,
  },
});

const userModel = mongoose.model("user", userSchema);
export default userModel;
