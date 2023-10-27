import { Prisma } from "@prisma/client";
import { prisma } from "../config";
import { excludePassword } from "./users.models";
import { PaginationOptions } from "../utils/types";

export async function getLikeByUserAndPost (userId: number, postId: number) {
    return await prisma.like.findFirst({ where: { userId, postId } });
}

export async function getLikesWithUsers ({ page = 1, count = 10 }: PaginationOptions, where?: Prisma.LikeFindManyArgs["where"]) {
    const likes = await prisma.like.findMany({
        where,
        skip: count * (page - 1),
        take: count,
        include: { user: true },
    });
    return likes.map(like => {
        const { user, ...likeWithoutUser } = like;
        return { user: excludePassword(user), ...likeWithoutUser };
    });
}

export async function getLikesWithPosts ({ page = 1, count = 10 }: PaginationOptions, where: Prisma.LikeFindManyArgs["where"]) {
    return await prisma.like.findMany({
        where,
        skip: count * (page - 1),
        take: count,
        include: { post: true }
    });
}

export async function createLike (data: Prisma.LikeCreateArgs["data"]) {
    return await prisma.like.create({ data });
}

export async function deleteLikeByUserAndPost (userId: number, postId: number) {
    return await prisma.like.deleteMany({ where: { userId, postId } });
}

export declare type Like = Prisma.LikeGetPayload<{}>;