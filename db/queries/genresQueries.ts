import pool from '../pool';

const getGenres = async () => {
  const { rows } = await pool.query('SELECT * FROM genres;');
  return rows;
};

const getGenreById = async (id: number) => {
  const { rows } = await pool.query('SELECT * FROM genres WHERE id = $1;', [
    id,
  ]);
  return rows[0];
};

const getGenreByName = async (name: string) => {
  const { rows } = await pool.query('SELECT * FROM genres WHERE name = $1;', [
    name,
  ]);
  return rows[0];
};

const createGenre = async (name: string) => {
  const { rows } = await pool.query(
    'INSERT INTO genres (name) VALUES ($1) RETURNING *;',
    [name]
  );
  return rows[0];
};

const updateGenre = async (id: number, name: string) => {
  const { rows } = await pool.query(
    'UPDATE genres SET name = $1 WHERE id = $2 RETURNING *;',
    [name, id]
  );
  return rows[0];
};

const deleteGenre = async (id: number) => {
  const { rows } = await pool.query(
    'DELETE FROM genres WHERE id = $1 RETURNING *;',
    [id]
  );
  return rows[0];
};

export {
  getGenres,
  getGenreById,
  getGenreByName,
  createGenre,
  updateGenre,
  deleteGenre,
};
