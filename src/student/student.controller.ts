import { Controller, Get } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}


  // Como tenemos el interceptor de cache en el app.module.ts
  //, no es necesario agregarlo en el controlador.
  // Si queremos que una ruta no se cachee, podemos agregar el decorador @UseInterceptors() en el controlador
  // o en la ruta específica.
  // Para cambiar la key de los datos en caché, podemos usar el decorador @CacheKey() en el controlador o en la ruta específica.
  @Get()
  async getStudents() {
    return this.studentService.getStudents();
  }
}
