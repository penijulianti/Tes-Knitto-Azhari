"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.post('/check-palindrome', (req, res) => {
    const { text } = req.body;
    const result = (0, controller_1.isPalindrome)(text);
    res.json({ isPalindrome: result });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
