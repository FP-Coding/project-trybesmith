import express from 'express';
import productRoute from './routers/product.router';
import userRoute from './routers/user.router';
import orderRoute from './routers/order.router';
import loginRoute from './routers/login.router';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
app.use('/login', loginRoute);

export default app;
