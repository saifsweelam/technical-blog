import { Prisma } from "@prisma/client";
import { prisma } from "../config";

export async function getTopicById(topicId: number) {
    return await prisma.topic.findUnique({ where: { id: topicId } });
}

export declare type Topic = Prisma.TopicGetPayload<{}>