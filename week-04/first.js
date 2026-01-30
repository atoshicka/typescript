//1
function toArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var result = toArray(10, 20, 30);
console.log(result);
function parseInput(input, radix) {
    if (radix !== undefined) {
        return parseInt(input, radix);
    }
    else {
        return parseInt(input);
    }
}
var result1 = parseInput("123");
console.log(result1);
console.log("\u0442\u0438\u043F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430: ".concat(typeof result1));
var result2 = parseInput("1010", 2);
console.log(result2);
console.log("\u0434\u0432\u043E\u0438\u0447\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E 1010 \u0432 \u0434\u0435\u0441\u044F\u0442\u0438\u0447\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 = ".concat(result2));
