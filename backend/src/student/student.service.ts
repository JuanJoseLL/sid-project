import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    async getStudents() {
        const cachedStudents = await this.cacheManager.get('students');
        if (cachedStudents) {
            console.log('Returning students from cache');
            return cachedStudents;
        }
        console.log('Returning students from DB');
        const students = await this.retrieveStudentsFromDB();
        await this.cacheManager.set('students', students);
        return students;
    }


    async retrieveStudentsFromDB() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const students = [
                    { id: 1, name: 'John Doe' },
                    { id: 2, name: 'Jane Doe' },
                    { id: 3, name: 'Alice' },
                    { id: 4, name: 'Bob' },
                ]
                resolve(students);
            }, 1000);
        });
    }

}
