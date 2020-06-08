"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
//, updateContactTracing
var ContactTracing_1 = require("../controllers/ContactTracing");
var router = express_1.Router();
router.post('/', ContactTracing_1.createContactTracing);
router.get('/', ContactTracing_1.getContactTracing);
//router.patch('/:id', updateContactTracing);
//router.delete('/:id', deleteTodo);
exports.default = router;
