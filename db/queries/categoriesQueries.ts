import pool from '../pool';

const getCategories = async () => {
  const { rows } = await pool.query('SELECT * FROM categories;');
  return rows;
};

const getCategoryById = async (id: number) => {
  const { rows } = await pool.query('SELECT * FROM categories WHERE id = $1;', [id]);
  return rows[0];
};

const createCategory = async (name: string, description: string) => {
  const { rows } = await pool.query('INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *;', [name, description]);
  return rows[0];
};

const updateCategory = async (id: number, name: string, description: string) => {
  const { rows } = await pool.query('UPDATE categories SET name = $1, description = $2 WHERE id = $3 RETURNING *;', [name, description, id]);
  return rows[0];
};

const deleteCategory = async (id: number) => {
  const { rows } = await pool.query('DELETE FROM categories WHERE id = $1 RETURNING *;', [id]);
  return rows[0];
};

export { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
