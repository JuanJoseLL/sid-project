import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Comment extends Document {
  @Prop({ required: true })
  texto: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true })
  evento: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
