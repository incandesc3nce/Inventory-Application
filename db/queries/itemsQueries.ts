import pool from '../pool';

const getItems = async () => {
  const { rows } = await pool.query('SELECT * FROM items;');
  return rows;
};

const getItemById = async (id: number) => {
  const { rows } = await pool.query('SELECT * FROM items WHERE id = $1;', [id]);
  return rows[0];
};

const createItem = async (
  title: string,
  description: string,
  category_id: number,
  genre_id: number,
  img_url: string
) => {
  const { rows } = await pool.query(
    'INSERT INTO items (title, description, category_id, genre_id, img_url) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
    [title, description, category_id, genre_id, img_url]
  );
  return rows[0];
};

const updateItem = async (
  id: number,
  title: string,
  description: string,
  category_id: number,
  genre_id: number,
  img_url: string
) => {
  const { rows } = await pool.query(
    'UPDATE items SET title = $1, description = $2, category_id = $3, genre_id = $4, img_url = $5 WHERE id = $6 RETURNING *;',
    [title, description, category_id, genre_id, img_url, id]
  );
  return rows[0];
};

const deleteItem = async (id: number) => {
  const { rows } = await pool.query(
    'DELETE FROM items WHERE id = $1 RETURNING *;',
    [id]
  );
  return rows[0];
};

const getItemsByCategory = async (id: number) => {
  const { rows } = await pool.query(
    'SELECT * FROM items WHERE category_id = $1;',
    [id]
  );
  return rows;
};

export { getItems, getItemById, createItem, updateItem, deleteItem , getItemsByCategory };
