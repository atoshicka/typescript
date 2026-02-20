import { sayHello } from '@/components/greeter';

document.querySelector('#app')!.textContent = sayHello('Maria');