import { Request, Response } from 'express';
import serviceOrder from '../services/serviceOrder';

const all = async (req:Request, res:Response) => {
  const result = await serviceOrder.all();

  res
    .status(200)
    .json(result);
};

export default {
  all,
};