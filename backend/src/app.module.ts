import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheInterceptor, CacheModule, CacheModuleOptions } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { StudentModule } from './student/student.module';
import { EventModule } from './event/event.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'oracle',
    //   host: '200.3.193.24',  // O usa '172.16.0.103' si estás dentro de la red interna
    //   port: 1522,
    //   username: 'P09779_1_2',
    //   password: 'MFQHqFMxVp',
    //   sid: 'ESTUD',          // Utiliza 'sid' en lugar de 'serviceName' para conexiones Oracle
    //   synchronize: true,
    //   logging: true,  // Habilitar el logging
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // }),
    CacheModule.register({
        store: redisStore,
        ttl: 30 * 1000, // Los elementos en caché se borran después de 30 segundos
        isGlobal: true, 
    }),
    EventModule,
    MongooseModule.forRoot('mongodb+srv://Juan:juan@cluster01.jh82oxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01')
    
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: 'APP_INTERCEPTOR', // Aqui estamos definiendo que el interceptor de cache
    useClass: CacheInterceptor, // se aplique a todas las rutas de nuestra aplicación OJO solo metodo GET
    // La key de los datos en caché se generará a partir de la URL de la solicitud.
  }],
})
export class AppModule {}
