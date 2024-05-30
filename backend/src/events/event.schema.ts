import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

class Ciudad {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  departamento: string;

  @Prop({ required: true })
  pais: string;
}

@Schema()
export class Lugar extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  direccion: string;

  @Prop({ type: Ciudad, required: true })
  ciudad: Ciudad;
}

export const LugarSchema = SchemaFactory.createForClass(Lugar);

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

  @Prop({ type: Lugar, required: true })
  lugar: Lugar;

  @Prop({ required: true })
  asistentes: string[];

  @Prop({ required: true })
  conferencistas: string[];

  @Prop({ required: true })
  facultades_organizadoras: string[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
