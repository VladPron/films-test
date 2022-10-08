import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module'; 
import { FilmsModule } from './films/films.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, FilmsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
