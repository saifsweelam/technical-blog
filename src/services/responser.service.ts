import { Response } from 'express';
import { APIResponse } from "../validators";
import { PaginationOptions } from '../utils/types'

export default {
    success<Resource>(res: Response, body?: Resource, statusCode: number = 200, pagination?: PaginationOptions) {
        const response: APIResponse<Resource> = {
            success: true,
            statusCode,
            ...pagination
        }
        body && (response.body = body);
        return res.status(statusCode).json(response);
    }
}