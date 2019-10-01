// Common
import { Module } from '@nestjs/common';
// Controllers
import { TasksController } from './tasks.controller';
// Services(providers)
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
