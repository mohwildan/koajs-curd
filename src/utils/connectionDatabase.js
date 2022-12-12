import mongoose from "mongoose";

const connectionDatabase = () => {
  mongoose.set("strictQuery", false);
  const dbUri = process.env.MONGO_URI;
  try {
    mongoose.connect(dbUri);
    console.log("database is connect");
  } catch (error) {
    console.log("database is disconnect");
    process.exit(1);
  }
};

export default connectionDatabase;
