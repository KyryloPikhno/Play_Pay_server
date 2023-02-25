import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export type TableDocument = Table & Document;

@Schema({ timestamps: true })
export class Table {
  @Prop({ unique: true })
  companyName: string;

  @Prop()
  gameName: string;

  @Prop()
  totalPrice: number;

  @Prop({ default: false })
  status: boolean;

  @Prop()
  currency: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const TableSchema = SchemaFactory.createForClass(Table);
