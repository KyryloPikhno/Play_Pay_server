import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now } from 'mongoose';

export type TableDocument = HydratedDocument<Table>;

@Schema({
  timestamps: true,
})
export class Table {
  @Prop({ unique: true, required: true })
  companyName: string;

  @Prop({ required: true })
  gameName: string;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ default: false })
  status: boolean;

  @Prop({ required: true })
  currency: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const TableSchema = SchemaFactory.createForClass(Table);
