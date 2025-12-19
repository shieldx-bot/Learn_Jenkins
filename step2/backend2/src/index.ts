// src/index.ts
import './tracing';
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  let delay;

  if (Math.random() < 0.3) {
    // 30% request rất chậm (500–2000ms)
    delay = 500 + Math.random() * 1500;
  } else {
    // 70% request nhanh (10–50ms)
    delay = 10 + Math.random() * 40;
  }

  await new Promise(r => setTimeout(r, delay));
  res.send('Hello from Express with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}, Hello  World Typescript! GitOps V2!`);
});