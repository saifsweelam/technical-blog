import { Prisma } from '@prisma/client';
import { prisma } from '../config';
import { PaginationOptions } from '../utils/types';

export async function getUserById(userId: number, includePosts: boolean = false) {
    return await prisma.user.findUnique({ where: { id: userId }, include: { posts: includePosts } });
}

export async function getUserByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } });
}

export async function getUsers({ page = 1, count = 10 }: PaginationOptions, where?: Prisma.UserFindManyArgs["where"]) {
    const users = await prisma.user.findMany({ where, skip: count * (page - 1), take: count });
    return users.map(excludePassword);
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