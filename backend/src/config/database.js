import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(`\n MongoDB está conectado !!!
            ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Conexão com o MongoDB falhou", error);
    process.exit(1);
  }
};

export default connectDB;
