//1.

function introduceYourself(name: string, age?: number): string {
     if (age !== undefined) {
        return `Привет, меня зовут ${name} и мне ${age} лет.`;
    } else {
        return `Привет, меня зовут ${name}.`;
    }
}

console.log(introduceYourself('Петр', 30));
console.log(introduceYourself('Анна')); 

//2.

interface Book {
    title: string;
    author: string;
    year?: number;
}

const myLibrary: Book[] = [
    {
        title: "Я изучаю typeScript",
        author: "Мария Петухъва",
        year: 2026
    },
    {
        title: "typeScript это круто, а пайтон это плохо",
        author: "Максим Сергеевич"
    }
];