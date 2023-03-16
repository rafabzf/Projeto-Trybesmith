import express from 'express';
import controllerUser from '../controllers/controllerUser';

const routerUser = express.Router();

routerUser.post('/', controllerUser.userCreate);

export default routerUser;