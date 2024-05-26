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
import { Document } from 'mongoose';
declare class Ciudad {
    nombre: string;
    departamento: string;
    pais: string;
}
export declare class People extends Document {
    id: string;
    nombre_usuario: string;
    nombre_completo: string;
    tipo_relacion: string;
    email: string;
    ciudad: Ciudad;
    es_empleado: boolean;
}
export declare const PeopleSchema: import("mongoose").Schema<People, import("mongoose").Model<People, any, any, any, Document<unknown, any, People> & People & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, People, Document<unknown, {}, import("mongoose").FlatRecord<People>> & import("mongoose").FlatRecord<People> & Required<{
    _id: unknown;
}>>;
export {};
