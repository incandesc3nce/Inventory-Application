import 'dotenv/config';
import { Client } from 'pg';

const categoryTable = `
  CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(500) NOT NULL
  );
  `;

const categoryInsert = `
  INSERT INTO categories (name, description) VALUES 
  ('Movies', 'A collection of feature-length films across various genres including action, drama, comedy, and more.'),
  ('TV Shows', 'A variety of television series, including dramas, comedies, reality shows, and documentaries.'),
  ('Animated', 'A selection of animated content, including cartoons, anime, and animated films.');
  `;

const genreTable = `
  CREATE TABLE IF NOT EXISTS genres (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL
  );
  `;

const genreInsert = `
  INSERT INTO genres (name) VALUES 
  ('Action'),
  ('Comedy'),
  ('Drama'),
  ('Fantasy'),
  ('Horror'),
  ('Detective'),
  ('Romance'),
  ('Sci-Fi'),
  ('Thriller');
  `;

const itemsTable = `
  CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  category_id INTEGER NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id),
  genre_id INTEGER NOT NULL,
  FOREIGN KEY (genre_id) REFERENCES genres(id)
  );
  `;

const itemsInsert = `
  INSERT INTO items (title, description, category_id, genre_id) VALUES 
  ('The Dark Knight', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.', 1, 1),
  ('The Shawshank Redemption', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through.', 1, 3),
  ('The Godfather', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 1, 3),
  ('Inception', 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', 1, 8),
  ('Fight Club', 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.', 1, 3),
  ('Breaking Bad', 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family''s future.', 2, 3),
  ('The Office', 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, tedium and romance.', 2, 2),
  ('Prison Break', 'A structural engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence by breaking themselves out from the inside.', 2, 3),
  ('The Boys', 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.', 2, 1),
  ('Stranger Things', 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.', 2, 4),
  ('Rick and Morty', 'An animated series that follows the exploits of a super scientist and his not-so-bright grandson.', 3, 8),
  ('Inside Out', 'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.', 3, 2),
  ('Toy Story', 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy''s bedroom.', 3, 2),
  ('Spider-Man: Into the Spider-Verse', 'Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.', 3, 1),
  ('Spider-Man: Across the Spider-Verse', 'Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.', 3, 1);
  ;
  `;

const main = async () => {
  console.log('seeding...');
  const createTables = categoryTable + genreTable + itemsTable;
  const insertValues = categoryInsert + genreInsert + itemsInsert;
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();
  await client.query(createTables);
  console.log('tables created');
  await client.query(insertValues);
  console.log('values inserted');
  await client.end();
  console.log('done!');
};

main();
