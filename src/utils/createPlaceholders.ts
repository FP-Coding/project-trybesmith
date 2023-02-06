import IProduct from '../interfaces/products';

const createPlaceholders = (newProduct: IProduct): [string, string] => {
  const placeholders: string = Object.keys(newProduct).map((_item: string) => '?').join(', ');

  const columns: string = Object.keys(newProduct).join(', ');

  return [columns, placeholders];
};

export default createPlaceholders;