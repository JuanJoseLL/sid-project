import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Event extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  categories: string[];

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  attendees: string[];

  @Prop({ required: true })
  facilitators: string[];

  @Prop({ required: true })
  organizingFaculties: string[];

  @Prop({ required: false })
  comments: string[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
