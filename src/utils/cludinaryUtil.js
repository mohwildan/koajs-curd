import dotEnv from "dotenv"
import Cloudinary from "cloudinary";
dotEnv.config()

const cloudinary = Cloudinary.v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default cloudinary;
