"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garage = void 0;
var Garage = /** @class */ (function () {
    function Garage() {
        this.vehicles = [];
    }
    Garage.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
        console.log("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u0433\u0430\u0440\u0430\u0436. \u0412\u0441\u0435\u0433\u043E: ".concat(this.vehicles.length));
    };
    Garage.prototype.listVehicles = function () {
        if (this.vehicles.length === 0) {
            console.log("в гараже нет транспортных средств");
            return;
        }
        console.log("список транспортных средств в гараже:");
        this.vehicles.forEach(function (vehicle, index) {
            console.log("".concat(index + 1, ". ").concat(vehicle.getInfo()));
        });
    };
    Garage.prototype.findVehicleById = function (id) {
        return this.vehicles.find(function (vehicle) { return vehicle.getId() === id; });
    };
    return Garage;
}());
exports.Garage = Garage;
