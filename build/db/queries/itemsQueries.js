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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemsByGenre = exports.getItemsByCategory = exports.deleteItem = exports.updateItem = exports.createItem = exports.getItemById = exports.getItems = void 0;
const pool_1 = __importDefault(require("../pool"));
const getItems = () => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('SELECT * FROM items;');
    return rows;
});
exports.getItems = getItems;
const getItemById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('SELECT * FROM items WHERE id = $1;', [id]);
    return rows[0];
});
exports.getItemById = getItemById;
const createItem = (title, description, category_id, genre_id, img_url) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('INSERT INTO items (title, description, category_id, genre_id, img_url) VALUES ($1, $2, $3, $4, $5) RETURNING *;', [title, description, category_id, genre_id, img_url]);
    return rows[0];
});
exports.createItem = createItem;
const updateItem = (id, title, description, category_id, genre_id, img_url) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('UPDATE items SET title = $1, description = $2, category_id = $3, genre_id = $4, img_url = $5 WHERE id = $6 RETURNING *;', [title, description, category_id, genre_id, img_url, id]);
    return rows[0];
});
exports.updateItem = updateItem;
const deleteItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('DELETE FROM items WHERE id = $1 RETURNING *;', [id]);
    return rows[0];
});
exports.deleteItem = deleteItem;
const getItemsByCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('SELECT * FROM items WHERE category_id = $1;', [id]);
    return rows;
});
exports.getItemsByCategory = getItemsByCategory;
const getItemsByGenre = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('SELECT * FROM items WHERE genre_id = $1;', [id]);
    return rows;
});
exports.getItemsByGenre = getItemsByGenre;
