/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Document, Types } from 'mongoose';
export declare class Event extends Document {
    titulo: string;
    descripcion: string;
    categorias: string[];
    fecha: Date;
    lugar: string;
    asistentes: string[];
    conferencistas: string[];
    facultades_organizadoras: string[];
    comentarios?: Types.ObjectId[];
}
export declare const EventSchema: import("mongoose").Schema<Event, import("mongoose").Model<Event, any, any, any, Document<unknown, any, Event> & Event & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Event, Document<unknown, {}, import("mongoose").FlatRecord<Event>> & import("mongoose").FlatRecord<Event> & Required<{
    _id: unknown;
}>>;
