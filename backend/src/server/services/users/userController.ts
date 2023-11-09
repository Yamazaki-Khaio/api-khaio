import { Request, Response } from 'express';
import User from './userModels';
import { generateToken, verifyToken } from '../../middleware/authenticate';

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
      const token = generateToken(user);
      return res.status(201).json({ success: true, data: user, token });
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

      //Lógica de atualização aqui

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
      //lógica de exclusão aqui:


      return res.json({ message: 'Usuário excluído com sucesso.' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao excluir usuário.' });
    }
  },


  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    // Adicionr lógica de autenticação aqui
    // Consulte o banco de dados para verificar se o usuário existe e as credenciais são válidas
    // Se for válido, gere um token JWT e retorne na resposta

    try {
      const user = await User.findOne({ where: { email, password } });

      if (!user) {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
      }

      const token = generateToken(user);

      return res.json({ success: true, token });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao fazer login.' });
    }
  },

};

export default UserController;
