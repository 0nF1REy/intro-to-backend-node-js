import express from "express";

const app = express();

app.use(express.json());

// Importação de rotas
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

// Declaração das rotas
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// Exemplo de rota: http://localhost:4000/api/v1/users/register

export default app;
