import dotenv from 'dotenv';
import jwt, { SignOptions } from 'jsonwebtoken';
import IUser from '../interfaces/users';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'fpdsmecn';

const config: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const generateToken = (payload: IUser): string => {
  const token = jwt.sign(payload, SECRET, config);
  return token;
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return undefined;
  }
};