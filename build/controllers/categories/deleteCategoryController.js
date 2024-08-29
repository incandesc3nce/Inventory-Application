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
exports.deleteCategoryController = void 0;
const categoriesQueries_1 = require("../../db/queries/categoriesQueries");
const itemsQueries_1 = require("../../db/queries/itemsQueries");
const genresQueries_1 = require("../../db/queries/genresQueries");
const deleteCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const items = yield (0, itemsQueries_1.getItemsByCategory)(id);
        yield Promise.all(items.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            const genre = yield (0, genresQueries_1.getGenreById)(item.genre_id);
            item.genre = genre.name;
        })));
        if (items.length > 0) {
            const category = yield (0, categoriesQueries_1.getCategoryById)(id);
            res.render('category', { title: 'Category', message: 'Cannot delete category with items in it', category: category, items: items });
            return;
        }
        yield (0, categoriesQueries_1.deleteCategory)(id);
        res.redirect('/categories');
    }
    catch (err) {
        console.log(err);
        res.render('404');
    }
});
exports.deleteCategoryController = deleteCategoryController;
