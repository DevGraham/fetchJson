"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var toDo = response.data;
    var id = toDo.id;
    var completed = toDo.completed;
    var title = toDo.title;
    console.log("\n        The item with the ID: " + id + "\n        Has a title of: " + title + "\n        Is it finished? " + completed + "\n    ");
});
