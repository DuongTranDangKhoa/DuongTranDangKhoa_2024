// src/index.js
import express, { Request, Response } from 'express';
import { env } from './config/env.config';
import { router } from './routes';
import bodyParser from 'body-parser';
import { errorHandler } from './middlewares/errorHandler.middleware';

export const app = express();
app.use(bodyParser.json());

const port = env.PORT;

app.get('/healthcheck', (req: Request, res: Response) => {
  res.status(200).send('Interify server is working fine');
});

app.post('/healthcheck', (req: Request, res: Response) => {
  res.status(200).send('Interify server is received post request');
});

app.use('/', router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use(errorHandler);
