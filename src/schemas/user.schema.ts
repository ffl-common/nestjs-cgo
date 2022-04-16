import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps : {createdAt: 'created', updatedAt: 'updated'} })
export class User extends Document {

  @Prop({ unique: true, nullable: false})
  email: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop({ nullable: false })
  refreshToken: string;

  @Prop({ default: 1, nullable: false })
  role: number;

  @Prop()
  active: boolean;

  @Prop({ default: Date.now })
  created!: Date;

  @Prop({ default: Date.now })
  updated!: Date;
  
}

export const UserSchema = SchemaFactory.createForClass(User);