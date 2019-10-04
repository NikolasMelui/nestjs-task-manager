import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsNotEmpty()
  @ApiModelProperty()
  readonly title: string;

  @IsNotEmpty()
  @ApiModelProperty()
  readonly description: string;
}
