import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces';

const productCreate = async (product: IProduct) => {
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
  } as IProduct;
};

export default {
  productCreate,
};