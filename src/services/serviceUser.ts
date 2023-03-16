import modelUser from '../models/modelUser';
import { IUser } from '../interfaces';

const userCreate = async (user: IUser) => {
  const result = await modelUser.userCreate(user);

  return result;
};

export default {
  userCreate,
};