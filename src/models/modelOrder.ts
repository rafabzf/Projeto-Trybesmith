import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces';
import connection from './connection';

const all = async (): Promise<Order[]> => {
  const [rows] = await connection.execute<Order[] & RowDataPacket[]>(
    `
    SELECT o.id, o.user_id AS userId,
    JSON_EXTRACT(CONCAT('[', GROUP_CONCAT(p.id SEPARATOR ','), ']'), '$') AS productsIds 
    FROM Trybesmith.orders AS o
    JOIN Trybesmith.products AS p ON o.id = p.order_id
    GROUP BY o.id, o.user_id
    `,
  );

  return rows;
};

export default {
  all,
};
