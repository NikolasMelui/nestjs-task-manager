import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, TasksModule, AuthModule],
})
export class AppModule {}
