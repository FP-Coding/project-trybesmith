import connection from './connection';

const create = async ({ name, amount }) => {
  const [{ insertId }] = await connection.execute('INSERT INTO Trybesmith.products (name, amount) VALUES(?,?)', [name, amount]);
};

export default create;