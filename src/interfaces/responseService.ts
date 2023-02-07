import IOrders from './orders';
import IProduct from './products';

export default interface IResponseCreate {
  type: number | null,
  message: IProduct | IProduct[] | string | IOrders[] | IOrders
}