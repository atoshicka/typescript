export abstract class Vehicle {
    private readonly id: number;
    
    public brand: string;
    protected year: number;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
        this.id = Date.now() + Math.floor(Math.random() * 1000);
    }

    abstract getInfo(): string;

    startEngine(): void {
        console.log("двигатель запущен");
    }

    getId(): number {
        return this.id;
    }
}
