import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: 'created', updatedAt: 'updated' } })
export class Product extends Document {

  @Prop({ nullable: false })
  name: string;

  @Prop({ nullable: false })
  price: number;

  @Prop({ nullable: false })
  description: string;

  @Prop({ default: Date.now })
  created!: Date;

  @Prop({ default: Date.now })
  updated!: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
