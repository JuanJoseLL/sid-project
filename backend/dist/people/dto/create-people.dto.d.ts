declare class CiudadDTO {
    nombre: string;
    departamento: string;
    pais: string;
}
export declare class CreatePeopleDTO {
    id: string;
    nombre_usuario: string;
    nombre_completo: string;
    tipo_relacion: string;
    email: string;
    ciudad: CiudadDTO;
    es_empleado: boolean;
}
export {};
