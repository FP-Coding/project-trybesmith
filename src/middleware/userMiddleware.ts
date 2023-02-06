import { NextFunction, Request, Response } from 'express';

const validateFieldsUser = async (req: Request, res: Response, next: NextFunction) => {
  const { level, vocation } = req.body;
  if (!level && level !== 0) return res.status(400).json({ message: '"level" is required' });
  if (!vocation) return res.status(400).json({ message: '"vocation" is required' });

  next();
};

export default validateFieldsUser;