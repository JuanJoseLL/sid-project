import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.schema';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() createEventDto: any): Promise<Event> {
    return this.eventService.create(createEventDto);
  }

  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }
}
