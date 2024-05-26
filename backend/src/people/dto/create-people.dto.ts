import { ValidateNested, IsString, IsArray, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

class CiudadDTO {
    @IsString()
    nombre: string;
  
    @IsString()
    departamento: string;
  
    @IsString()
    pais: string;
}

export class CreatePeopleDTO {
  @IsString()
  id: string;

  @IsString()
  nombre_usuario: string;

  @IsString()
  nomnbre_completo: string;

  @IsString()
  tipo_relacion: string;

  @IsString()
  email: string;

  @ValidateNested()
  @Type(() => CiudadDTO)
  ciudad: CiudadDTO;

  @IsArray()
  @IsString({ each: true })
  conferencistas: string[];

  @IsArray()
  @IsString({ each: true })
  facultades_organizadoras: string[];

}
