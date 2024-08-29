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
exports.updateItemController = exports.editItemController = void 0;
const itemsQueries_1 = require("../../db/queries/itemsQueries");
const categoriesQueries_1 = require("../../db/queries/categoriesQueries");
const genresQueries_1 = require("../../db/queries/genresQueries");
const getItemRow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield (0, itemsQueries_1.getItemById)(id);
    return item;
});
const editItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const item = yield getItemRow(id);
    const itemCategory = yield (0, categoriesQueries_1.getCategoryById)(item.category_id);
    const itemGenre = yield (0, genresQueries_1.getGenreById)(item.genre_id);
    item.category = itemCategory.name;
    item.genre = itemGenre.name;
    const categories = yield (0, categoriesQueries_1.getCategories)();
    const genres = yield (0, genresQueries_1.getGenres)();
    res.render("itemForm", {
        title: "Edit Item",
        item: item,
        action: `/items/${id}/edit`,
        categories: categories,
        genres: genres,
    });
});
exports.editItemController = editItemController;
const updateItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title, description, category, genre, img_url } = req.body;
    if (!id || !title || !description || !category || !genre || !img_url) {
        return res.status(400).send("All input is required");
    }
    yield (0, itemsQueries_1.updateItem)(id, title, description, category, genre, img_url);
    res.redirect("/items");
});
exports.updateItemController = updateItemController;
