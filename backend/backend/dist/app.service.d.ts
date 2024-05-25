import { Cache } from '@nestjs/cache-manager';
export declare class AppService {
    private cacheManager;
    constructor(cacheManager: Cache);
    getHello(): Promise<string>;
}
