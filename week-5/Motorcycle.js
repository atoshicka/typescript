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
exports.Motorcycle = void 0;
var Vehicle_1 = require("./Vehicle");
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(brand, type, year) {
        var _this = _super.call(this, brand, year) || this;
        _this.type = type;
        return _this;
    }
    Motorcycle.prototype.getInfo = function () {
        return "\u041C\u043E\u0442\u043E\u0446\u0438\u043A\u043B ".concat(this.brand, ", \u0442\u0438\u043F ").concat(this.type, ", ").concat(this.year, " \u0433.\u0432. (ID: ").concat(this.getId(), ")");
    };
    Motorcycle.prototype.startEngine = function () {
        console.log("мотоцикл заводится кнопкой");
        _super.prototype.startEngine.call(this);
    };
    return Motorcycle;
}(Vehicle_1.Vehicle));
exports.Motorcycle = Motorcycle;
