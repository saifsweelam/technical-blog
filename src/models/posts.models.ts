import { Prisma } from "@prisma/client";
import { prisma } from "../config";
import { AsyncReturnType, PaginationOptions } from "../utils/types";
import { excludePassword } from "./users.models";

export async function getPosts({ page = 1, count = 10 }: PaginationOptions, where?: Prisma.PostFindManyArgs["where"]) {
    return await prisma.post.findMany({ where, skip: count * (page - 1), take: count });
}

export async function getPostById(postId: number) {
    return await prisma.post.findUnique({ where: { id: postId } });
}

export async function getFullPostById (postId: number, view: boolean = true) {
    try {
        const post = await prisma.post.update({
            where: { id: postId },
            include: {
                author: true,
                topic: true,
                comments: { include: { author: true } },
                _count: { select: { likes: true } },
            },
            data: {
                views: { increment: +view }
            },
        });
        const { author, comments, ...postWithoutAuthorAndComments } = post;
        const mappedComments = comments.map(comment => {
            const { author, ...commentWithoutAuthor } = comment;
            return { author: excludePassword(author), ...commentWithoutAuthor };
        })
        return { author: excludePassword(author), comments: mappedComments, ...postWithoutAuthorAndComments };
    } catch {
        return;
    }
}

export async function getPostAuthorId (postId: number) {
    return (await prisma.post.findUnique({ where: { id: postId }, select: { authorId: true } }))?.authorId;
}

export async function createPost(data: Prisma.PostCreateArgs["data"]) {
    try {
        return await prisma.post.create({ data });
    } catch {
        return;
    }
}

export async function updatePost(postId: number, data: Prisma.PostUpdateArgs["data"]) {
    return await prisma.post.update({ where: { id: postId }, data });
}

export async function deletePost(postId: number) {
    try {
        return await prisma.post.delete({ where: { id: postId } });
    } catch {
        return;
    }
}

export declare type Post = Prisma.PostGetPayload<{}>;
export declare type PostFull = NonNullable<AsyncReturnType<typeof getFullPostById>>;