"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = require("body-parser");
var user_1 = require("./routes/user");
var app = express_1.default();
app.use(body_parser_1.json());
app.use(user_1.userRouter);
mongoose_1.default.connect("mongodb+srv://suntecTMS:suntectms2022@cluster0.zm9cv.mongodb.net/viconet?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, function () {
    console.log('connected to database');
});
app.listen(3000, function () {
    console.log('server is listening on port 3000');
});
