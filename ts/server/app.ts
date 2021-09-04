/**
 * app.ts
 * 
 * This is the main Express app. 
 * 
 */

import express, { Request, Response } from 'express';

import route from './route';

const app = express();

// controllers
app.use('/', route);

// 404
app.use(function(req: Request, res: Response) {
  return res.status(404).json({ status: "FAILURE", code: 404, error: 'Not found' });
})

// Errors
app.use((req: Request, res: Response) => {
  return res.status(500).json({ status: "FAILURE", code: 500, error: 'Unhandled error' });
})

export default app;
