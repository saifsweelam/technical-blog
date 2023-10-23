import { Response } from 'express';
import { APIResponse } from "../validators";

export default {
    success<Resource>(res: Response, body?: Resource, statusCode: number = 200, pagination?: { page: number, count: number }) {
        const response: APIResponse<Resource> = {
            success: true,
            statusCode,
            ...pagination
        }
        body && (response.body = body);
        return res.status(statusCode).json(response);
    }
}