import { RowDataPacket } from 'mysql2';
import IOrders from '../interfaces/orders';
import connection from './connection';

const getAllModel = async (): Promise<IOrders[]> => {
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

export default getAllModel;