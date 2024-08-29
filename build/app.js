"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const itemsRouter_1 = __importDefault(require("./routes/itemsRouter"));
const categoriesRouter_1 = __importDefault(require("./routes/categoriesRouter"));
const genresRouter_1 = __importDefault(require("./routes/genresRouter"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/', indexRouter_1.default);
app.use('/items', itemsRouter_1.default);
app.use('/categories', categoriesRouter_1.default);
app.use('/genres', genresRouter_1.default);
app.use('*', (req, res) => {
    res.render('404');
});
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
app.listen(Number(PORT), HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});
