import IProduct from '../interfaces/products';

const createPlaceholders = (newProduct: IProduct): [string, string[]] => {
  const placeholders: string = Object.keys(newProduct).map((_item: string) => '?').join(', ');

  const values: string[] = Object.values(newProduct);

  return [placeholders, values];
};

export default createPlaceholders;