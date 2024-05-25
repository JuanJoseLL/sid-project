import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Attendee extends Document {
  @Prop({ required: true, unique: true, index: true, alias: 'nombre_usuario' })
  username: string;

  @Prop({ required: true, alias: 'nombre_completo' })
  fullName: string;

  @Prop({ required: true, alias: 'tipo_relacion' })
  relationshipType: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  city: { 
    nombre: string;
    departamento: string;
    pais: string;
  };

  @Prop({ required: true, alias: 'es_empleado' })
  isEmployee: boolean;
}

export const AttendeeSchema = SchemaFactory.createForClass(Attendee);
