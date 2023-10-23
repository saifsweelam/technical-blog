import { verify, sign } from 'jsonwebtoken';
import { User } from '../models/users.models';
import { secret } from '../config';

export default {
    generate (user: User) {
        return sign(user, secret);
    },

    decrypt (token: string): (User|false) {
        try {
            return verify(token, secret) as User;
        } catch (err) {
            return false;
        }
    }
}