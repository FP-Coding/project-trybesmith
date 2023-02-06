import IProduct from '../interfaces/products';
import IUser from '../interfaces/users';

const createPlaceholders = (newProduct: (IProduct | IUser)): [string, string] => {
  const placeholders: string = Object.keys(newProduct).map((_item: string) => '?').join(', ');

  const columns: string = Object.keys(newProduct).join(', ');

  return [columns, placeholders];
};

export default createPlaceholders;