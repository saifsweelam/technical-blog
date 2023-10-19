import { HttpError } from "http-errors";

export default interface APIResponse<Resource> {
    success: boolean,
    statusCode: number,
    count?: number,
    page?: number,
    body?: Resource,
    error?: HttpError,
}