import 'dotenv/config';
import express from 'express';
import indexRouter from './routes/indexRouter';
import path from 'path';

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(Number(PORT), HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
