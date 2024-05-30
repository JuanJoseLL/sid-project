import { Module, forwardRef } from '@nestjs/common';
import { OracleService } from './oracle.service';
import { OracleController } from './oracle.controller';
import { AppModule } from '../app.module';

@Module({
  imports: [forwardRef(() => AppModule)], 
  providers: [OracleService],
  controllers: [OracleController],
  exports: [OracleService],
})
export class OracleModule {}