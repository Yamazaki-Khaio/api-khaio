import { Request, Response } from 'express';
import User from './userModels';

export const UserController = {
  async index(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
  },

  async show(req: Request, res: Response) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao buscar usuário.' });
    }
  },

  async store(req: Request, res: Response) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
      await user.update(req.body);
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao atualizar usuário.' });
    }
  },

  async destroy(req: Request, res: Response) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
      await user.destroy();
      return res.json({ message: 'Usuário excluído com sucesso.' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao excluir usuário.' });
    }
  },
};
