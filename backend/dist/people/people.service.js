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
exports.PeopleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const people_schema_1 = require("./people.schema");
let PeopleService = class PeopleService {
    constructor(peopleModel) {
        this.peopleModel = peopleModel;
    }
    async create(createPeopleDTO) {
        console.log('Creating People with DTO:', createPeopleDTO);
        const createdPeople = new this.peopleModel(createPeopleDTO);
        return createdPeople.save();
    }
    async findAll() {
        return this.peopleModel.find().exec();
    }
    async findOne(id) {
        const person = await this.peopleModel.findOne({ id }).exec();
        return person;
    }
};
exports.PeopleService = PeopleService;
exports.PeopleService = PeopleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(people_schema_1.People.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PeopleService);
//# sourceMappingURL=people.service.js.map