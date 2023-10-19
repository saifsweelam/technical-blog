import express, { Express, Request, Response, NextFunction } from 'express';
import createError, { HttpError } from 'http-errors';
import morgan from 'morgan';
import cors from 'cors';

import config from './config';
import APIResponse from './interfaces/response.interface';

import authRouter from './routes/auth.routes';
import commentsRouter from './routes/comments.routes';
import postsRouter from './routes/posts.routes';
import topicsRouter from './routes/topics.routes';
import usersRouter from './routes/users.routes';

// Initialize Application
const app: Express = express();

// Use Logger
app.use(morgan('dev'));

// CORS Headers Middleware
app.use(cors());

// Set Routes
app.use('/', authRouter);
app.use('/auth', authRouter);
app.use('/comments', commentsRouter);
app.use('/posts', postsRouter);
app.use('/topics', topicsRouter);
app.use('/users', usersRouter);

// 404 Handler
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404, "Resource Not Found"));
})

// Errors Handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction): void => {
    const response: APIResponse<undefined> = {
        success: false,
        statusCode: err.statusCode,
        error: err,
    }
    res.status(err.statusCode).json(response);
})

app.listen(config.port, () => console.log(`Listening on port ${config.port}`));

export default app;