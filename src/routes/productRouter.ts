import express from 'express';

import controllerProduct from '../controllers/controllerProduct';

const routerProduct = express.Router();

routerProduct.post('/', controllerProduct.productCreate);

export default routerProduct;