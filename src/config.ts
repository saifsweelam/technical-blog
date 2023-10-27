import { PrismaClient } from '@prisma/client';
import { randomBytes } from 'crypto';

export const port = process.env.PORT || 3000;
export const prisma = new PrismaClient();
export const secret = process.env.NODE_ENV === 'production' ? randomBytes(20).toString("hex") : "ThisIsTotallySecret";
export const altSecret = process.env.NODE_ENV === 'production' ? randomBytes(20).toString("hex") : "OMGAnotherOne";