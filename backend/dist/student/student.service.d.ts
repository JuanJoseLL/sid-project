import { Cache } from '@nestjs/cache-manager';
export declare class StudentService {
    private cacheManager;
    constructor(cacheManager: Cache);
    getStudents(): Promise<unknown>;
    retrieveStudentsFromDB(): Promise<unknown>;
}
