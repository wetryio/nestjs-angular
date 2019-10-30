import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(name?: string): string {
    return name ? `Hello ${name}!` : 'Hello World!';
  }
}
