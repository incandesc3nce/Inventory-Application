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
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategoryById = exports.getCategories = void 0;
const pool_1 = __importDefault(require("../pool"));
const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('SELECT * FROM categories;');
    return rows;
});
exports.getCategories = getCategories;
const getCategoryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('SELECT * FROM categories WHERE id = $1;', [
        id,
    ]);
    return rows[0];
});
exports.getCategoryById = getCategoryById;
const createCategory = (name, description) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *;', [name, description]);
    return rows[0];
});
exports.createCategory = createCategory;
const updateCategory = (id, name, description) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('UPDATE categories SET name = $1, description = $2 WHERE id = $3 RETURNING *;', [name, description, id]);
    return rows[0];
});
exports.updateCategory = updateCategory;
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('DELETE FROM categories WHERE id = $1 RETURNING *;', [id]);
    return rows[0];
});
exports.deleteCategory = deleteCategory;
