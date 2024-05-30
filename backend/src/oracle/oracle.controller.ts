import { Controller, Get } from '@nestjs/common';
import { OracleService } from './oracle.service';

@Controller('oracle')
export class OracleController {
  constructor(private readonly oracleService: OracleService) {}

  @Get('facultades')
  async getFacultades() {
    try {
      const data = await this.oracleService.executeQuery('SELECT * FROM P09779_1_2.FACULTADES');
      return data;
    } catch (err) {
      return { error: err.message };
    }
  }
}