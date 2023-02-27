import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TableModule } from './table/table.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://Kyrylo:${process.env.MONGO_PASSWORD}@cluster0.qoum5y2.mongodb.net/test`,
    ),
    TableModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
