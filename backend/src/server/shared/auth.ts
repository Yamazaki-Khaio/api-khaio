import jwt from 'jsonwebtoken';

const secretKey = 'secret';

interface User {
    id: number;
    name: string;
    email: string;
}

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
