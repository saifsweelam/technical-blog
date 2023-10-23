import { hash, compare } from 'bcrypt';
import { secret } from '../config';
import { User } from '../models/users.models';

export default {
    async hash(password: string) {
        return await hash(password, 10);
    },

    async check(password: string, user: User) {
        return await compare(password, user.password);
    }
}