import { Prisma } from "@prisma/client";
import { prisma } from "../config";

export async function getTopicById (topicId: number, includePosts: boolean = false) {
    return await prisma.topic.findUnique({ where: { id: topicId }, include: { posts: includePosts } });
}

export async function getTopics ({ page = 1, count = 10 }, where?: Prisma.TopicFindManyArgs["where"]) {
    return await prisma.topic.findMany({ where, skip: count * (page - 1), take: count })
}

export async function createTopic (data: Prisma.TopicCreateArgs["data"]) {
    return await prisma.topic.create({ data });
}

export declare type Topic = Prisma.TopicGetPayload<{}>;