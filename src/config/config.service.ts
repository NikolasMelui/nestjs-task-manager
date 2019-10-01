import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

export interface ConfigData {
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
}

@Injectable()
export class ConfigService {
  private config: ConfigData;

  constructor() {
    const environment = process.env.NODE_ENV || 'development';
    const configFileData: any = dotenv.parse(
      fs.readFileSync(`${environment}.env`),
    );
    this.config = configFileData as ConfigData;
  }

  read(): ConfigData {
    return this.config;
  }
}
