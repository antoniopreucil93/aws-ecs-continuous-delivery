import { Controller, Get } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    const region = 'eu-central-1';
    const secretName = 'ENV_TEST_APP';

    // Create a Secrets Manager client
    const client = new AWS.SecretsManager({
      region: region,
    });

    const { SecretString } = await client
      .getSecretValue({ SecretId: secretName })
      .promise();

    const secret = JSON.parse(SecretString);

    console.log(process.env.GITHUB_TOKEN, ' data');

    return secret['FIRST_ENV'];
  }

  @Get('hello')
  getHelloWorld() {
    return 'hello world';
  }
}
