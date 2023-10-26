import { verify, sign } from 'jsonwebtoken';
import { User } from '../models/users.models';
import { secret, altSecret } from '../config';

export default {
    generateAccessToken (user: User) {
        return sign(user, secret);
    },

    decryptAccessToken (token: string): (User|void) {
        try {
            return verify(token, secret) as User;
        } catch {
            return;
        }
    },

    generateRefreshToken (userId: number) {
        return sign({ userId }, altSecret, { expiresIn: "1y" });
    },

    decryptRefreshToken (token: string): (number|void) {
        try {
            const data = verify(token, altSecret) as { userId: number }
            return data.userId;
        } catch {
            return;
        }
    }
}