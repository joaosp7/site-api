import { Injectable } from '@nestjs/common';
import { env } from './config/env';

@Injectable()
export class AppService {
  getHello(): any {
    return { ...env };
  }
}
