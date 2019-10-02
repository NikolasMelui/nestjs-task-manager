import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    const upperCasedValue = value.toUpperCase();

    if (!this.isStatusValid(upperCasedValue)) {
      throw new BadRequestException(`"${value} is an invalid status"`);
    }

    return value;
  }
  private isStatusValid(status: any) {
    return this.allowedStatuses.includes(status);
  }
}
