import { Vehicle } from './Vehicle';

export class Garage {
    private vehicles: Vehicle[] = [];

    addVehicle(vehicle: Vehicle): void {
        this.vehicles.push(vehicle);
        console.log(`транспортное средство добавлено в гараж. Всего: ${this.vehicles.length}`);
    }

    listVehicles(): void {
        if (this.vehicles.length === 0) {
            console.log("в гараже нет транспортных средств");
            return;
        }

        console.log("список транспортных средств в гараже:");
        this.vehicles.forEach((vehicle, index) => {
            console.log(`${index + 1}. ${vehicle.getInfo()}`);
        });
    }

    findVehicleById(id: number): Vehicle | undefined {
        return this.vehicles.find(vehicle => vehicle.getId() === id);
    }
}