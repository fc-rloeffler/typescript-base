"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Priority;
(function (Priority) {
    Priority["unimportant"] = "unimportant";
    Priority["average"] = "average";
    Priority["urgent"] = "urgent";
})(Priority || (Priority = {}));
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Who are you?', function (name) {
    console.log("Hey there ".concat(name, "!"));
    readline.close();
});
