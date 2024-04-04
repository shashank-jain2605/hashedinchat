import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}hashedin`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(
      `database connected!! :)👻 at ${connectInstance.connection.host}`
    );
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;

// your-database-name
