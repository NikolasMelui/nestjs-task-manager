import { Global, Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

function DatabaseOrmModule(): DynamicModule {
  const config = new ConfigService().read();
  return TypeOrmModule.forRoot({
    type: 'postgres',
    host: config.DB_HOST,
    port: Number(config.DB_PORT),
    database: config.DB_NAME,
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    entities: [`${__dirname}/../**/*.entity.ts`],
    synchronize: true,
  });
}

@Global()
@Module({
  imports: [ConfigModule, DatabaseOrmModule()],
})
export class DatabaseModule {}
