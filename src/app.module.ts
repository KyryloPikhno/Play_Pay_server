import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TableModule } from './table/table.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    TableModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
