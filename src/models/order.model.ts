import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IOrders from '../interfaces/orders';
import connection from './connection';

export const getAllModel = async (): Promise<IOrders[]> => {
  const query = `SELECT 
  o.id as id, o.user_id as userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM
  Trybesmith.products AS p
      INNER JOIN
  Trybesmith.orders AS o
  ON p.order_id = o.id
  GROUP BY o.id , o.user_id;`;
  const [result] = await connection.execute<RowDataPacket[] & IOrders[]>(query);
  return result; 
};

export const createOrderModel = async ({ id, productsIds }: IOrders): Promise<boolean> => {
  const placeholders: string = productsIds.map((_) => '?').join(', ');
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const query2 = `UPDATE Trybesmith.products SET order_id = ? WHERE id IN (${placeholders})`;
  const [{ insertId: newIdOrder }] = await connection.execute<ResultSetHeader>(query, [id]);
  const [{ affectedRows }] = await connection
    .execute<ResultSetHeader>(query2, [newIdOrder, ...productsIds]);
  if (affectedRows === productsIds.length) return true;
  return false;
};
