import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces';

const userCreate = async (user: IUser) => {
  const { username,
    level,
    password,
    vocation,
  } = user;

  const result = await connection.execute<ResultSetHeader>(
    `
    INSERT INTO Trybesmith.users 
      (username, level, password, vocation) 
    VALUES 
      (?, ?, ?, ?);
    `, 
    [username, level, password, vocation],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  const userNew = { id: insertId, ...user };

  return userNew;
};

export default {
  userCreate,
};