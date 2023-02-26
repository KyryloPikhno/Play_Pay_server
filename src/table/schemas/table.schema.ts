import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Table {
  @Prop({ required: true, unique: true })
  companyName!: string;

  @Prop({ required: true })
  gameName!: string;

  @Prop({ required: true, unique: true })
  totalPrice!: number;

  @Prop({ default: false })
  status: boolean;

  @Prop({ required: true })
  currency!: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const TableSchema = SchemaFactory.createForClass(Table);
