import { Request, Response } from 'express';
import serviceUser from '../services/serviceUser';
import auth from '../auth/validationToken';
import { IUser } from '../interfaces';

const userCreate = async (req: Request, res: Response) => {
  const userNew: IUser = req.body;
  const result = await serviceUser.userCreate(userNew);

  const { password, ...userNoPass } = result;

  const token = auth.loginToken(userNoPass);

  res
    .status(201)
    .json({ token });
};

export default {
  userCreate,
};