import { Prisma } from '@prisma/client';
import { prisma } from '../config';

export async function getUserById(userId: number) {
    return await prisma.user.findUnique({ where: { id: userId } });
}

export async function getUserByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } });
}

export async function createUser(data: Prisma.UserCreateArgs["data"]) {
    return await prisma.user.create({ data });
}

export function excludePassword(user: User) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

export declare type User = Prisma.UserGetPayload<{}>;
export declare type UserWithoutPassword = ReturnType<typeof excludePassword>;