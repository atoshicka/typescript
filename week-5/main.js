"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
var Motorcycle_1 = require("./Motorcycle");
var Garage_1 = require("./Garage");
var myGarage = new Garage_1.Garage();
var car1 = new Car_1.Car("Toyota", "Camry", 2020);
var car2 = new Car_1.Car("BMW", "X5", 2022);
var motorcycle1 = new Motorcycle_1.Motorcycle("Harley-Davidson", "cruiser", 2019);
var motorcycle2 = new Motorcycle_1.Motorcycle("Yamaha", "sport", 2021);
myGarage.addVehicle(car1);
myGarage.addVehicle(car2);
myGarage.addVehicle(motorcycle1);
myGarage.addVehicle(motorcycle2);
myGarage.listVehicles();
var firstVehicleId = car1.getId();
var foundVehicle = myGarage.findVehicleById(firstVehicleId);
if (foundVehicle) {
    console.log("найдено транспортное средство:");
    console.log(foundVehicle.getInfo());
    foundVehicle.startEngine();
}
var nonExistentId = 12345; //точно нет => undefined
var notFoundVehicle = myGarage.findVehicleById(nonExistentId);
if (!notFoundVehicle) {
    console.log("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E \u0441 ID ".concat(nonExistentId, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"));
}
