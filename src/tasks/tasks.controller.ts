// Common
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
// Services
import { TasksService } from './tasks.service';
// Models
import { Task, TaskStatus } from './task.model';
// DTO
import { CreateTaskDto } from './dto/create-tesk.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    return Object.keys(filterDto).length
      ? this.taskService.getFilteredTasks(filterDto)
      : this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string): Task {
    return this.taskService.getTask(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.taskService.deleteTask(id);
  }

  @Patch('/:id')
  updateTask(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.taskService.updateTask(id, status);
  }
}
