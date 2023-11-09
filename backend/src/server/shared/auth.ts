import jwt from 'jsonwebtoken';
import User from '../services/users/userModels';

const secretKey = process.env.JWT_SECRET as string;
const expiresIn = process.env.JWT_EXPIRES_IN as string;

if (!secretKey || !expiresIn) {
    throw new Error('As variáveis de ambiente JWT_SECRET e JWT_EXPIRES_IN devem ser definidas.');
  }

  function generateToken(user: User): string {
    const token = jwt.sign({ user }, secretKey, { expiresIn });
    return token;
}

function verifyToken(token: string): User {
    try {
        const decoded = jwt.verify(token, secretKey) as { user: User };
        return decoded.user;
    } catch (err) {
        console.error('Erro ao verificar o token:', err);
        throw new Error('Token inválido ou expirado.');
    }
}



export { generateToken, verifyToken };
