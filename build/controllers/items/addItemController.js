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
exports.createItemController = exports.addItemController = void 0;
const itemsQueries_1 = require("../../db/queries/itemsQueries");
const categoriesQueries_1 = require("../../db/queries/categoriesQueries");
const genresQueries_1 = require("../../db/queries/genresQueries");
const addItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield (0, categoriesQueries_1.getCategories)();
    const genres = yield (0, genresQueries_1.getGenres)();
    const emptyItem = {
        title: "",
        description: "",
        category: "",
        genre: "",
        img_url: "",
    };
    res.render("itemForm", {
        title: "Add Item",
        item: emptyItem,
        action: "/items/new",
        categories: categories,
        genres: genres,
    });
});
exports.addItemController = addItemController;
const createItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, category, genre, img_url } = req.body;
    if (!title || !description || !category || !genre || !img_url) {
        return res.status(400).send("All input is required");
    }
    yield (0, itemsQueries_1.createItem)(title, description, category, genre, img_url);
    res.redirect("/items");
});
exports.createItemController = createItemController;
