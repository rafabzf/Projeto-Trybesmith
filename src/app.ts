import express from 'express';
import routerProduct from './routes/productRouter';
import routerUser from './routes/userRouter';
import routerOrder from './routes/orderRouter';

const app = express();

app.use(express.json());

app.use('/products', routerProduct);

app.use('/users', routerUser);

app.use('/orders', routerOrder);

export default app;