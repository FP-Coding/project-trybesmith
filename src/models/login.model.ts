import { RowDataPacket } from 'mysql2';
import IUser from '../interfaces/users';
import connection from './connection';

const loginModel = async (username: string): Promise<IUser> => {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
  const [[user]] = await connection.execute<(RowDataPacket & IUser)[]>(query, [username]);
  return user;
};

export default loginModel;