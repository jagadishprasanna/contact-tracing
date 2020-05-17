"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const todos_1 = __importDefault(require("./routes/todos"));
const ContactTracting_1 = __importDefault(require("./routes/ContactTracting"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/todos', todos_1.default);
app.use('/ContactTracing', ContactTracting_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000, () => {
    console.log("listening...");
});
