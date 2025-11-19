import express from "express";

const app = express();

app.use(express.json());

// Importação: routes
import userRouter from "./routes/user.route.js";

// Declaração das rotas
app.use("/api/v1/users", userRouter);

// Exemplo de rota: http://localhost:4000/api/v1/users/register

export default app;
