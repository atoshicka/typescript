"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, year) {
        this.brand = brand;
        this.year = year;
        this.id = Date.now() + Math.floor(Math.random() * 1000);
    }
    Vehicle.prototype.startEngine = function () {
        console.log("двигатель запущен");
    };
    Vehicle.prototype.getId = function () {
        return this.id;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
