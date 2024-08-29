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
exports.itemController = void 0;
const itemsQueries_1 = require("../../db/queries/itemsQueries");
const genresQueries_1 = require("../../db/queries/genresQueries");
const categoriesQueries_1 = require("../../db/queries/categoriesQueries");
const getItemRow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield (0, itemsQueries_1.getItemById)(id);
    if (!item) {
        throw new Error(`404: Couldn't find item with id ${id}`);
    }
    const genre = yield (0, genresQueries_1.getGenreById)(item.genre_id);
    const category = yield (0, categoriesQueries_1.getCategoryById)(item.category_id);
    item.genre = genre.name;
    item.category = category.name;
    return item;
});
const itemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const item = yield getItemRow(id);
        res.render('item', { title: item.title, item: item });
    }
    catch (err) {
        console.log(err);
        res.render('404');
    }
});
exports.itemController = itemController;
