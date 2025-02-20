"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var route_1 = __importDefault(require("./router/route"));
var app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, "../viwes"));
app.set('views', "./views/page");
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use((0, morgan_1.default)('dev'));
app.use('/', route_1.default);
app.listen(4000, function () {
    console.log("server is running on  http://localhost:4000");
});
