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
exports.createGenreController = exports.addGenreController = void 0;
const genresQueries_1 = require("../../db/queries/genresQueries");
const addGenreController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const emptyGenre = {
        name: '',
    };
    res.render('genreForm', {
        title: 'Add Genre',
        genre: emptyGenre,
        action: '/genres/new',
    });
});
exports.addGenreController = addGenreController;
const createGenreController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    if (!name) {
        return res.status(400).send('All input is required');
    }
    yield (0, genresQueries_1.createGenre)(name);
    res.redirect('/genres');
});
exports.createGenreController = createGenreController;
