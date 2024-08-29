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
exports.updateGenreController = exports.editGenreController = void 0;
const genresQueries_1 = require("../../db/queries/genresQueries");
const getGenreRow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const genre = yield (0, genresQueries_1.getGenreById)(id);
    if (!genre) {
        throw new Error(`404: Couldn't find genre with id ${id}`);
    }
    return genre;
});
const editGenreController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const genre = yield getGenreRow(id);
        res.render("genreForm", {
            title: "Edit Genre",
            genre: genre,
            action: `/genres/${id}/edit`,
        });
    }
    catch (err) {
        console.log(err);
        res.render("404");
    }
});
exports.editGenreController = editGenreController;
const updateGenreController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    if (!name) {
        return res.status(400).send("All input is required");
    }
    yield (0, genresQueries_1.updateGenre)(id, name);
    res.redirect("/genres");
});
exports.updateGenreController = updateGenreController;
