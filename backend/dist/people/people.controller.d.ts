import { PeopleService } from './people.service';
import { CreatePeopleDTO } from './dto/create-people.dto';
export declare class PeopleController {
    private readonly peopleService;
    constructor(peopleService: PeopleService);
    create(createPeopleDTO: CreatePeopleDTO): Promise<import("./people.schema").People>;
    findAll(): Promise<import("./people.schema").People[]>;
    findOne(id: string): Promise<import("./people.schema").People>;
}
