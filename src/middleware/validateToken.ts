import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwt';

const tokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  const verification = verifyToken(token);
  if (!verification) return res.status(401).json({ message: 'Invalid token' });
  next();
};

export default tokenMiddleware;