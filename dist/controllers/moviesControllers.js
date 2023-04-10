var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import moviesServices from "../services/moviesServices.js";
function findAllMovies(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id_user, movies, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id_user = req.params.idUser;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, moviesServices.findAllMovies({ id_user: id_user })];
                case 2:
                    movies = _a.sent();
                    return [2 /*return*/, res.status(201).send(movies)];
                case 3:
                    err_1 = _a.sent();
                    next(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function findMoviesByPlataform(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var plataform, movies, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    plataform = req.params.plataform;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, moviesServices.findMoviesByPlataform({ plataform: plataform })];
                case 2:
                    movies = _a.sent();
                    return [2 /*return*/, res.status(201).send(movies)];
                case 3:
                    err_2 = _a.sent();
                    next(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function findMoviesByGenre(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var genre, movies, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    genre = req.params.genre;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, moviesServices.findMoviesByGenre({ genre: genre })];
                case 2:
                    movies = _a.sent();
                    return [2 /*return*/, res.status(201).send(movies)];
                case 3:
                    err_3 = _a.sent();
                    next(err_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, movie_name, plataform, movie_img, genre, id_user, err_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, movie_name = _a.movie_name, plataform = _a.plataform, movie_img = _a.movie_img, genre = _a.genre, id_user = _a.id_user;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, moviesServices.create({
                            movie_name: movie_name,
                            plataform: plataform,
                            movie_img: movie_img,
                            genre: genre,
                            id_user: id_user,
                        })];
                case 2:
                    _b.sent();
                    return [2 /*return*/, res.status(201).send("ok")];
                case 3:
                    err_4 = _b.sent();
                    next(err_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function update(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var movieId, notes, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    movieId = req.params.movieId;
                    notes = req.body.notes;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, moviesServices.update({ movieId: movieId, notes: notes })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.sendStatus(201)];
                case 3:
                    err_5 = _a.sent();
                    next(err_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteMovie(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var movieId, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    movieId = req.params.movieId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, moviesServices.deleteMovie({ movieId: movieId })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.sendStatus(201)];
                case 3:
                    err_6 = _a.sent();
                    next(err_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export default {
    findAllMovies: findAllMovies,
    findMoviesByPlataform: findMoviesByPlataform,
    findMoviesByGenre: findMoviesByGenre,
    create: create,
    update: update,
    deleteMovie: deleteMovie,
};
