import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any, metadata: ArgumentMetadata) {
    // console.info(`The metadata is ${metadata}`);

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
