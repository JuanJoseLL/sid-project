"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
let StudentService = class StudentService {
    constructor(cacheManager) {
        this.cacheManager = cacheManager;
    }
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
                ];
                resolve(students);
            }, 1000);
        });
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [cache_manager_1.Cache])
], StudentService);
//# sourceMappingURL=student.service.js.map