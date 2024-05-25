"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cache_manager_1 = require("@nestjs/cache-manager");
const cache_manager_redis_yet_1 = require("cache-manager-redis-yet");
const student_module_1 = require("./student/student.module");
const mongoose_1 = require("@nestjs/mongoose");
const typeorm_1 = require("@nestjs/typeorm");
const oracledb = require("oracledb");
oracledb.initOracleClient({ libDir: 'C:\\instantclient_21_13' });
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'oracle',
                connectString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=200.3.193.24)(PORT=1522))(CONNECT_DATA=(SERVICE_NAME=ESTUD)))",
                username: 'P09779_1_2',
                password: 'MFQHqFMxVp',
                synchronize: true,
                logging: true,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
            }),
            cache_manager_1.CacheModule.register({
                store: cache_manager_redis_yet_1.redisStore,
                ttl: 30 * 1000,
                isGlobal: true,
            }),
            student_module_1.StudentModule,
            mongoose_1.MongooseModule.forRoot('mongodb+srv://Juan:juan@cluster01.jh82oxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01')
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, {
                provide: 'APP_INTERCEPTOR',
                useClass: cache_manager_1.CacheInterceptor,
            }],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map