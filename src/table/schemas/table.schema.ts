import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TableDocument = Table & Document;

@Schema()
export class Table {
  @Prop()
  companyName: string;

  @Prop()
  gameName: string;

  @Prop()
  totalPrice: number;

  @Prop()
  currency: string;
}

export const TableSchema = SchemaFactory.createForClass(Table);
