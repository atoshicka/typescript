import { Vehicle } from './Vehicle';

export class Motorcycle extends Vehicle {
    private type: string;

    constructor(brand: string, type: string, year: number) {
        super(brand, year);
        this.type = type;
    }

    getInfo(): string {
        return `мотоцикл ${this.brand}, тип ${this.type}, ${this.year} г.в. (ID: ${this.getId()})`;
    }

    startEngine(): void {
        console.log("мотоцикл заводится кнопкой");
        super.startEngine();
    }
}