// auth.ts
import jwt from 'jsonwebtoken';
import User from '../services/users/userModels';

const secretKey = process.env.JWT_SECRET as string;
const expiresIn = process.env.JWT_EXPIRES_IN as string;

function generateToken(user: User): string {
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn });
    return token;
}

function verifyToken(token: string): User {
    try {
        const decoded = jwt.verify(token, secretKey) as User;
        return decoded;
    } catch (err) {
        throw new Error('Token inválido');
    }
}

function loginRequired(req: any, res: any, next: any) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
        console.log(token);
        const user = verifyToken(token);
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token inválido' });
    }
}


export { generateToken, verifyToken, loginRequired };
