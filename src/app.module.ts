import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      // TODO: Fix it in productoin
      secret: 'nikolassupersecretstring',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    DatabaseModule,
    TasksModule,
    AuthModule,
  ],
})
export class AppModule {}
