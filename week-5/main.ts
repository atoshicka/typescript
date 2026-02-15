import { Car } from './Car';
import { Motorcycle } from './Motorcycle';
import { Garage } from './Garage';

const myGarage = new Garage();

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("BMW", "X5", 2022);
const motorcycle1 = new Motorcycle("Harley-Davidson", "cruiser", 2019);
const motorcycle2 = new Motorcycle("Yamaha", "sport", 2021);

myGarage.addVehicle(car1);
myGarage.addVehicle(car2);
myGarage.addVehicle(motorcycle1);
myGarage.addVehicle(motorcycle2);

myGarage.listVehicles();

const firstVehicleId = car1.getId();
const foundVehicle = myGarage.findVehicleById(firstVehicleId);

if (foundVehicle) {
    console.log("найдено транспортное средство:");
    console.log(foundVehicle.getInfo());
    foundVehicle.startEngine();
}

const nonExistentId = 12345; //проверка, что не найден id
const notFoundVehicle = myGarage.findVehicleById(nonExistentId);
if (!notFoundVehicle) {
    console.log(`транспортное средство с ID ${nonExistentId} не найдено`);
}