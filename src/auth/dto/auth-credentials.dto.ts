import { ApiModelProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiModelProperty()
  username: string;

  @ApiModelProperty()
  password: string;
}
