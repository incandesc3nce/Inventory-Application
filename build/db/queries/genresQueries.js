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
exports.deleteGenre = exports.updateGenre = exports.createGenre = exports.getGenreById = exports.getGenres = void 0;
const pool_1 = __importDefault(require("../pool"));
const getGenres = () => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('SELECT * FROM genres;');
    return rows;
});
exports.getGenres = getGenres;
const getGenreById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('SELECT * FROM genres WHERE id = $1;', [
        id,
    ]);
    return rows[0];
});
exports.getGenreById = getGenreById;
const createGenre = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('INSERT INTO genres (name) VALUES ($1) RETURNING *;', [name]);
    return rows[0];
});
exports.createGenre = createGenre;
const updateGenre = (id, name) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('UPDATE genres SET name = $1 WHERE id = $2 RETURNING *;', [name, id]);
    return rows[0];
});
exports.updateGenre = updateGenre;
const deleteGenre = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool_1.default.query('DELETE FROM genres WHERE id = $1 RETURNING *;', [id]);
    return rows[0];
});
exports.deleteGenre = deleteGenre;
