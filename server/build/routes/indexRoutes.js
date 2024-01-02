"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indesController_1 = require("../controllers/indesController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indesController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
