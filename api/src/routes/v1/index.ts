import express from 'express';
import authRouter from './auth'
const app = express();

app.use('/auth',authRouter);

export default app;