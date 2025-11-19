import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validação básica
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Todos os campos são importante!" });
    }

    // Checando se o usuário já existe
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "Usuário já existe!" });
    }

    // Criação do usuário
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
    });

    res.status(201).json({
      message: "Usuário registrado!",
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro interno no servidor", error: error.message });
  }
};

export { registerUser };
