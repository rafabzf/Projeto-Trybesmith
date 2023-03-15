import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces';

const productCreate = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;

  const resProduct = await connection.execute<ResultSetHeader>(`
        INSERT INTO Trybesmith.products (name, amount) 
        VALUES (?, ?);
    `, [name, amount]);
  
  const [dataInserted] = resProduct;

  const { insertId } = dataInserted;

  return {
    id: insertId,
    ...product,
  };
};

const allProducts = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute<IProduct[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products;',
  );

  return rows;
};

export default {
  productCreate,
  allProducts,
};