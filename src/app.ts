import express from 'express';
import routerProduct from './routes/productRouter';
import routerUser from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);

app.use('/users', routerUser);

export default app;