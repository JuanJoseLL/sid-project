// src/events/event.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Event extends Document {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  categorias: string[];

  @Prop({ required: true })
  fecha: Date;

  @Prop({ required: true })
  lugar: string;

  @Prop({ required: true })
  asistentes: string[];

  @Prop({ required: true })
  conferencistas: string[];

  @Prop({ required: true })
  facultades_organizadoras: string[];

  @Prop()
  comentarios?: string[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
