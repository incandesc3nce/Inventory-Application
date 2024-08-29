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
exports.genresController = void 0;
const genresQueries_1 = require("../../db/queries/genresQueries");
const getGenreRows = () => __awaiter(void 0, void 0, void 0, function* () {
    const genres = yield (0, genresQueries_1.getGenres)();
    return genres;
});
const genresController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const genres = yield getGenreRows();
    res.render('genres', { title: 'Genres List', genres: genres });
});
exports.genresController = genresController;
