
import mongoose from "mongoose";

const uri = `mongodb+srv://${process.env.user}:${process.env.password}@cluster0.iceycas.mongodb.net/crudDb?retryWrites=true&w=majority`;

const connectMongoDb = () => {
  try {
    mongoose.connect(uri);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDb;
