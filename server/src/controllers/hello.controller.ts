import { Controller, Get, Param, Post, Body, UsePipes, Header } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { MyModel } from '../models/my.model';
import { ParsingPipe } from '../util/parsing.pipe';
import { HelloService } from '../services/hello.service';

@Controller({path: 'api/hello'})
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getHello(): Observable<string> {
    return of(JSON.stringify(this.helloService.getHello()));
  }

  @Get(':name')
  @Header('Content-Type', 'application/json')
  getHelloByName(@Param() params): string {
    return JSON.stringify(this.helloService.getHello(params.name));
  }

  @Post()
  @UsePipes(ParsingPipe)
  @Header('Content-Type', 'application/json')
  postMessage(@Body() body: MyModel): string {
    return JSON.stringify(this.helloService.getHello(body.name));
  }

}
