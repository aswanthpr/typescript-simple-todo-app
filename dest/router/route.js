"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var todo_1 = require("../model/todo");
var router = express_1.default.Router();
var taskManager = new todo_1.TaskManager();
router.get('/', function (req, res) {
    var task = taskManager.getAllTasks();
    res.render('home', { task: task });
});
router.post("/add", function (req, res) {
    var _a = req.body, title = _a.title, isUrgent = _a.isUrgent;
    console.log("is urgent");
    taskManager.addTask(title, isUrgent);
    res.redirect('/');
});
router.get("/edit/:id", function (req, res) {
    console.log(req.params.id, 'osidhf');
    var task = taskManager.getTaskById(parseInt(req.params.id));
    if (task) {
        res.render('edit', { task: task });
    }
    else {
        res.redirect('/');
    }
});
router.post('/update/:id', function (req, res) {
    var _a = req.body, title = _a.title, status = _a.status;
    taskManager.updateTask(parseInt(req.params.id), title, status);
    res.redirect('/');
});
router.post("/delete/:id", function (req, res) {
    console.log(req.params.id, 'parmsid');
    taskManager.deletetask(parseInt(req.params.id));
    res.redirect('/');
});
exports.default = router;
