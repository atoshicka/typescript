import { formatDate } from '@/utils/formatters';

export function sayHello(name: string): string {
    return `Hello, ${name}! Today is ${formatDate(new Date())}`;
}