//1
function toArray<T>(...args: T[]): T[] {
    return args;
}

const result = toArray(10, 20, 30);
console.log(result)

//2
function parseInput(input: string): number;
function parseInput(input: string, radix: number): number;

function parseInput(input: string, radix?: number): number {
    if (radix !== undefined) {
        return parseInt(input, radix);
    } else {
        return parseInt(input);
    }
}

const result1 = parseInput("123");
console.log(result1);
console.log(`тип результата: ${typeof result1}`);

const result2 = parseInput("1010", 2);
console.log(result2);
console.log(`двоичное число 1010 в десятичной системе = ${result2}`);

//3
interface Book {
  isbn: string;
  title: string;
  author: string;
  pages: number;
  inStockCount: number;
}

type BookCatalogItem = Omit<Book, 'inStockCount'>;

type LibraryCatalog = Record<Book['isbn'], BookCatalogItem>;