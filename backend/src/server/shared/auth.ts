import jwt from 'jsonwebtoken';
import User from '../services/users/userModels';

const secretKey = 'secret';


function generateToken(user: User): string {
    const token = jwt.sign(user, secretKey);
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



export { generateToken, verifyToken };
