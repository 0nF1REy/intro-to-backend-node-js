import { Post } from "../models/post.model.js";

// Criação de uma postagem
const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      return res.status(400).json({
        message: "Todos os campos são requiridos.",
      });
    }

    const post = await Post.create({ name, description, age });

    res.status(201).json({
      message: "Postagem criado com sucesso!",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro interno do servidor.",
      error,
    });
  }
};

// Leitura de todas as postagens
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Erro interno do servidor.",
      error,
    });
  }
};

export { createPost, getPosts };
