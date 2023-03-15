import { Request, Response } from 'express';
import serviceProduct from '../services/serviceProduct';
import { IProduct } from '../interfaces';

const productCreate = async (req: Request, res: Response) => {
  const product: IProduct = req.body;

  const resProduct = await serviceProduct.productCreate(product);

  res
    .status(201)
    .json(resProduct);
};

const allProducts = async (req: Request, res: Response) => {
  const resProduct = await serviceProduct.allProducts();

  res
    .status(200)
    .json(resProduct);
};

export default {
  productCreate,
  allProducts,
};