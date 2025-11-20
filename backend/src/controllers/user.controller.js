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

const loginUser = async (req, res) => {
  try {
    
    // Checando se o usuário já existe
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email.toLowerCase()
    });

    if(!user) return res.status(400).json({
      message: "Usuário não encontrado."
    });

    // Comparação de senhas
    const isMatch = await user.comparePassword(password);
    if(!isMatch) return res.status(400).json({
      message: "Credenciais inválidas."
    })

    res.status(200).json({
      message: "Usuário Logado",
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    })

  } catch (error) {
    res.status(500).json({
      message: "Erro interno do servidor."
    })
  }
}

export { registerUser, loginUser };
