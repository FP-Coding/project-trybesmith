import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/users';
import createPlaceholders from '../utils/createPlaceholders';
import connection from './connection';

const createModel = async (newUser: IUser): Promise<number> => {
  const [columns, placeholders] = createPlaceholders(newUser);
  const query = `INSERT INTO Trybesmith.users (${columns}) VALUES (${placeholders})`;
  console.log(query);
  
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query, [...Object.values(newUser)]);
  return insertId;
};

export default createModel;