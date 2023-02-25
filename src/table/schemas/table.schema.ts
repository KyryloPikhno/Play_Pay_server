import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TableDocument = HydratedDocument<Table>;

@Schema()
export class Table {
  @Prop()
  companyName: string;

  @Prop()
  gameName: string;

  @Prop()
  totalPrice: number;

  @Prop()
  Currency: string;
}

export const TableSchema = SchemaFactory.createForClass(Table);
