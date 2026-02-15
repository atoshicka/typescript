import { Vehicle } from './Vehicle';

export class Car extends Vehicle {
    private model: string;

    constructor(brand: string, model: string, year: number) {
        super(brand, year);
        this.model = model;
    }
    getInfo(): string {
        return `автомобиль ${this.brand} ${this.model}, ${this.year} г.в. (ID: ${this.getId()})`;
    }

    startEngine(): void {
        console.log("автомобиль заводится с ключа");
        super.startEngine();
    }
}