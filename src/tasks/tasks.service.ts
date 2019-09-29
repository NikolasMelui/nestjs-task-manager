import { Injectable } from '@nestjs/common';
import fakeTasks from './fakeData/tasks';

@Injectable()
export class TasksService {
  private tasks = fakeTasks;

  getAllTasks() {
    return this.tasks;
  }
}
