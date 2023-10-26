import express, { Express, Request, Response, NextFunction } from 'express';
import createHttpError, { HttpError } from 'http-errors';
import morgan from 'morgan';
import cors from 'cors';

import { port } from './config';
import { APIResponse } from './validators';
import { userMiddleware } from './middlewares/auth.middlewares';

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

// JSON Body Parser
app.use(express.json());

// Add User to Request if Available
app.use(userMiddleware);

// Set Routes
app.use('/', authRouter);
app.use('/auth', authRouter);
app.use('/comments', commentsRouter);
app.use('/posts', postsRouter);
app.use('/topics', topicsRouter);
app.use('/users', usersRouter);

// 404 Handler
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createHttpError(404, "Resource Not Found"));
})

// Errors Handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction): void => {
    const response: APIResponse = {
        success: false,
        statusCode: err.statusCode || 500,
        error: err,
    }
    res.status(err.statusCode || 500).json(response);
})

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;