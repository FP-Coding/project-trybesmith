import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/products';
import createPlaceholders from '../utils/createPlaceholders';

const create = async (newProduct: IProduct): Promise<number> => {
  const [columns, placeholders] = createPlaceholders(newProduct);
  const query = `INSERT INTO Trybesmith.products (${columns}) VALUES(${placeholders})`;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query, [...Object.values(newProduct)]);
  return insertId;
};

export default create;