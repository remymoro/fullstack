import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
    imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: join(__dirname, '../../', '.env'), // Spécifiez le chemin vers le fichier .env dans le dossier api
      }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        port: configService.get<number>('MYSQL_TCP_PORT'),
        database: configService.get<string>('MYSQL_DATABASE'),
        username: configService.get<string>('MYSQL_USER'),
        password: configService.get<string>('MYSQL_PASSWORD'),
        entities: [],
        synchronize: true,
      }),
      inject: [ConfigService],
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
