import express from 'express';
import v1 from './v1'
const app = express();

app.use('/v1',v1);
export default app;