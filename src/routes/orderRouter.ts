import express from 'express';
import controllerOrder from '../controllers/controllerOrder';

const routerOrder = express.Router();

routerOrder.get('/', controllerOrder.all);

export default routerOrder;