// src/events/event.controller.ts
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    console.log('Received DTO:', createEventDto);
    return await this.eventService.create(createEventDto);
  }
}
