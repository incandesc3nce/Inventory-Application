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
exports.deleteGenreController = void 0;
const genresQueries_1 = require("../../db/queries/genresQueries");
const itemsQueries_1 = require("../../db/queries/itemsQueries");
const deleteGenreController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const items = yield (0, itemsQueries_1.getItemsByGenre)(id);
        if (items.length > 0) {
            const genre = yield (0, genresQueries_1.getGenreById)(id);
            res.render("genre", {
                title: "Genre",
                message: "Cannot delete genre with items in it",
                genre: genre,
                items: items,
            });
            return;
        }
        yield (0, genresQueries_1.deleteGenre)(id);
        res.redirect("/genres");
    }
    catch (err) {
        console.log(err);
        res.render("404");
    }
});
exports.deleteGenreController = deleteGenreController;
