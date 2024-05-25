import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Place extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  direccion: string;

  @Prop({ required: true })
  ciudad: {
    nombre: string;
    departamento: string;
    pais: string;
  };
}

export const PlaceSchema = SchemaFactory.createForClass(Place);

