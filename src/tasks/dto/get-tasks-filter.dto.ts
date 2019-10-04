import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task-status.enum';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  @ApiModelPropertyOptional({ enum: ['OPEN', 'IN_PROGRESS', 'DONE'] })
  readonly status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  @ApiModelPropertyOptional()
  readonly search: string;
}
