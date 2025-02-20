"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = exports.UrgentTask = exports.RegularTask = exports.BaseTask = void 0;
var BaseTask = /** @class */ (function () {
    function BaseTask(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
    }
    return BaseTask;
}());
exports.BaseTask = BaseTask;
var RegularTask = /** @class */ (function (_super) {
    __extends(RegularTask, _super);
    function RegularTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegularTask.prototype.getPriority = function () {
        return "Normal";
    };
    return RegularTask;
}(BaseTask));
exports.RegularTask = RegularTask;
var UrgentTask = /** @class */ (function (_super) {
    __extends(UrgentTask, _super);
    function UrgentTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UrgentTask.prototype.getPriority = function () {
        return "High";
    };
    return UrgentTask;
}(BaseTask));
exports.UrgentTask = UrgentTask;
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.task = [];
        this.nextId = 1;
    }
    TaskManager.prototype.addTask = function (title, isUrgent) {
        var task = isUrgent
            ? new UrgentTask(this.nextId++, title, 'to-do')
            : new RegularTask(this.nextId++, title, 'to-do');
        this.task.push(task);
        return task;
    };
    TaskManager.prototype.getAllTasks = function () {
        return this.task;
    };
    TaskManager.prototype.getTaskById = function (id) {
        return this.task.find(function (task) { return task.id === id; });
    };
    TaskManager.prototype.updateTask = function (id, title, status) {
        var task = this.getTaskById(id);
        if (task) {
            task.title = title;
            task.status = status;
        }
        return task;
    };
    TaskManager.prototype.deletetask = function (id) {
        var index = this.task.findIndex(function (task) { return task.id == id; });
        if (index !== -1) {
            this.task.splice(index, 1);
            return true;
        }
        return false;
    };
    return TaskManager;
}());
exports.TaskManager = TaskManager;
