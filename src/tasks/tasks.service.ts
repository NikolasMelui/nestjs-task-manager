import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import fakeTasks from './fakeData/tasks';
import * as uuid from 'uuid/v1';
import { CreateTaskDto } from './dto/create-tesk.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = fakeTasks;

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto) {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, status: TaskStatus): Task {
    const task = this.getTask(id);
    task.status = status;
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
