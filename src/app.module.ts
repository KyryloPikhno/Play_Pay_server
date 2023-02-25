import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TableModule } from './table/table.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    TableModule,
  ],
  // imports: [TableModule],
  // controllers: [AppController, TableController],
  // providers: [AppService],
})
export class AppModule {}
