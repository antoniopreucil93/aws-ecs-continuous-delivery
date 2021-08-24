import { Controller, Get } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHelloWorld() {
    return 'hello world';
  }
}
