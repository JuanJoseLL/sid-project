import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(createEventDto: CreateEventDto): Promise<import("./event.schema").Event>;
}
