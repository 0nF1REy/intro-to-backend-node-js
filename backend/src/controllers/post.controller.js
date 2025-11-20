import { Post } from "../models/post.model.js";

const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || age === undefined) {
      return res.status(400).json({
        message: "Todos os campos são requeridos.",
      });
    }

    const post = await Post.create({ name, description, age });

    res.status(201).json({
      message: "Postagem criada com sucesso!",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro interno do servidor.",
      error,
    });
  }
};

const getPosts = async (_req, res) => {
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

const updatePost = async (req, res) => {
  try {
    // Validação básica para verificar se o corpo (body) está vazio

    // { name: x, description: y, age: z } -> [name, description, age]
    // {} = truthy

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "Nenhum dado fornecido para atualização.",
      });
    }

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!post)
      return res.status(404).json({
        message: "Postagem não encontrada.",
      });

    res.status(200).json({
      message: "Postagem atualizada com sucesso!",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro interno do servidor.",
      error,
    });
  }
};

export { createPost, getPosts, updatePost };
