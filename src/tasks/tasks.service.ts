import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import fakeTasks from './fakeData/tasks';

@Injectable()
export class TasksService {
  private tasks: Task[] = fakeTasks;

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
