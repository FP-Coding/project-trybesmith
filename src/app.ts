import express from 'express';
import productRoute from './routers/product.router';
import userRoute from './routers/user.router';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);

export default app;
