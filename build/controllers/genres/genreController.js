"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genreController = void 0;
const itemsQueries_1 = require("../../db/queries/itemsQueries");
const genresQueries_1 = require("../../db/queries/genresQueries");
const getItemsByGenreRows = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const genre = yield (0, genresQueries_1.getGenreById)(id);
    if (!genre) {
        throw new Error(`404: Couldn't find genre with id ${id}`);
    }
    const items = yield (0, itemsQueries_1.getItemsByGenre)(id);
    yield Promise.all(items.map((item) => __awaiter(void 0, void 0, void 0, function* () {
        item.genre = genre.name;
    })));
    return items;
});
const genreController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const genre = yield (0, genresQueries_1.getGenreById)(id);
        const items = yield getItemsByGenreRows(id);
        res.render('genre', { title: 'Genre', genre: genre, items: items, message: '' });
    }
    catch (err) {
        console.log(err);
        res.render('404');
    }
});
exports.genreController = genreController;
