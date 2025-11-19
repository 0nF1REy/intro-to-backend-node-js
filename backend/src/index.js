import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

const startServer = async () => {
  try {
    await connectDB();

    app.on("Erro", (error) => {
      console.log("ERRO", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `O servidor está sendo executado na porta: ${process.env.PORT || 8000}`
      );
    });

  } catch (error) {
    console.log("A conexão com o MongoDB falhou", error);
  }
};

startServer();
