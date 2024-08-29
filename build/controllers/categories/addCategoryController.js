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
exports.createCategoryController = exports.addCategoryController = void 0;
const categoriesQueries_1 = require("../../db/queries/categoriesQueries");
const addCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const emptyCategory = {
        name: '',
        description: '',
    };
    res.render('categoryForm', {
        title: 'Add Category',
        category: emptyCategory,
        action: '/categories/new',
    });
});
exports.addCategoryController = addCategoryController;
const createCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).send('All input is required');
    }
    yield (0, categoriesQueries_1.createCategory)(name, description);
    res.redirect('/categories');
});
exports.createCategoryController = createCategoryController;
