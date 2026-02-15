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
exports.Car = void 0;
var Vehicle_1 = require("./Vehicle");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, year) {
        var _this = _super.call(this, brand, year) || this;
        _this.model = model;
        return _this;
    }
    Car.prototype.getInfo = function () {
        return "\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C ".concat(this.brand, " ").concat(this.model, ", ").concat(this.year, " \u0433.\u0432. (ID: ").concat(this.getId(), ")");
    };
    Car.prototype.startEngine = function () {
        console.log("автомобиль заводится с ключа");
        _super.prototype.startEngine.call(this);
    };
    return Car;
}(Vehicle_1.Vehicle));
exports.Car = Car;
