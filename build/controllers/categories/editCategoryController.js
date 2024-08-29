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
exports.updateCategoryController = exports.editCategoryController = void 0;
const categoriesQueries_1 = require("../../db/queries/categoriesQueries");
const getCategoryRow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield (0, categoriesQueries_1.getCategoryById)(id);
    return category;
});
const editCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const category = yield getCategoryRow(id);
    res.render('categoryForm', {
        title: 'Edit Category',
        category: category,
        action: `/categories/${id}/edit`,
    });
});
exports.editCategoryController = editCategoryController;
const updateCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, description } = req.body;
    if (!id || !name || !description) {
        return res.status(400).send('All input is required');
    }
    yield (0, categoriesQueries_1.updateCategory)(id, name, description);
    res.redirect('/categories');
});
exports.updateCategoryController = updateCategoryController;
