"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
class GamesController {
    index(req, res) {
        res.send('Games');
    }
}
exports.gamesController = new GamesController();
