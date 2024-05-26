import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  texto: string;

  @IsString()
  @IsNotEmpty()
  evento: string;
}
