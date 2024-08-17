import 'dotenv/config';
import express from 'express';
import indexRouter from './routes/indexRouter';
import itemsRouter from './routes/itemsRouter';
import categoriesRouter from './routes/categoriesRouter';
import genresRouter from './routes/genresRouter';
import path from 'path';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/items', itemsRouter);
app.use('/categories', categoriesRouter);
app.use('/genres', genresRouter);

app.use('*', (req, res) => {
  res.render('404');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(Number(PORT), HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
