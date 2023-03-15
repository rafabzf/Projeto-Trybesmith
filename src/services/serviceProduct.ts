import modelProduct from '../models/modelProduct';
import { IProduct } from '../interfaces';

const productCreate = async (product: IProduct) => {
  const resProduct = await modelProduct.productCreate(product);

  return resProduct;
};

const allProducts = async () => {
  const resProduct = await modelProduct.allProducts();

  return resProduct;
};

export default {
  productCreate,
  allProducts,
};