import { Prisma } from "@prisma/client";
import { prisma } from "../config";
import { AsyncReturnType, PaginationOptions } from "../utils/types";
import { excludePassword } from "./users.models";

export async function getComments({ page = 1, count = 10 }: PaginationOptions, where?: Prisma.CommentFindManyArgs["where"]) {
    const comments = await prisma.comment.findMany({
        where,
        skip: count * (page - 1),
        take: count,
        include: { author: true }
    });
    return comments.map(comment => {
        const { author, ...commentWithoutAuthor } = comment;
        return { author: excludePassword(author), ...commentWithoutAuthor };
    });
}

export async function getCommentById(commentId: number, includePost: boolean = false) {
    const comment = await prisma.comment.findUnique({
        where: { id: commentId },
        include: { author: true, post: includePost }
    });
    if (!comment) return;
    const { author, ...commentWithoutAuthor } = comment;
    return { author: excludePassword(author), ...commentWithoutAuthor };
}

export async function getCommentAuthorId(commentId: number) {
    return (await prisma.comment.findUnique({ where: { id: commentId }, select: { authorId: true } }))?.authorId;
}

export async function createComment(data: Prisma.CommentCreateArgs["data"]) {
    return await prisma.comment.create({ data });
}

export async function updateComment(commentId: number, data: Prisma.CommentUpdateArgs["data"]) {
    try {
        return await prisma.comment.update({ where: { id: commentId }, data });
    } catch {
        return;
    }
}

export async function deleteComment(commentId: number) {
    try {
        return await prisma.comment.delete({ where: { id: commentId } });
    } catch {
        return;
    }
}

export declare type Comment = Prisma.CommentGetPayload<{}>;
export declare type CommentWithAuthor = NonNullable<AsyncReturnType<typeof getCommentById>>;