import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';

import todoRoutes from './routes/todos';
import contactTracingRoutes from './routes/ContactTracting';
import userRoutes from './routes/User';
const app = express();

app.use(json());

app.use('/todos', todoRoutes);
app.use('/ContactTracing',contactTracingRoutes)
app.use('/User', userRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000,()=>{
  console.log("listening...");
});

