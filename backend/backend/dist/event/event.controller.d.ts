import { EventService } from './event.service';
import { Event } from './event.schema';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(createEventDto: any): Promise<Event>;
    findAll(): Promise<Event[]>;
}
