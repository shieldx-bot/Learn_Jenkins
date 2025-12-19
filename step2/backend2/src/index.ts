// src/index.ts
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  res.send('Hello from Express with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}, Hello  World Typescript! GitOps V2!`);
});