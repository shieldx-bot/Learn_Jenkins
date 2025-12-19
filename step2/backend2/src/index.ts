// src/index.ts
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  const randomDelay = Math.floor(Math.random() * 2000); // Random delay up to 2 seconds
  await new Promise(resolve => setTimeout(resolve, randomDelay));
  res.send('Hello from Express with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}, Hello  World Typescript! GitOps V2!`);
});