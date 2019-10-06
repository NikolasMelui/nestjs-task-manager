import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const user = new User();
    user.username = username;

    // Password is open form. So cute!
    user.password = password;

    try {
      await user.save();
    } catch (error) {
      const errors = {
        conflictException: '23505',
      };
      throw error.code === errors.conflictException
        ? new ConflictException('Username already exists')
        : new InternalServerErrorException();
    }
  }
}
