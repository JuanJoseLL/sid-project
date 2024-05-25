import { Controller, Get, Post, Body } from '@nestjs/common';
import { AttendeesService } from './attendees.service';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { Attendee } from './attendees.schema';

@Controller('attendees')
export class AttendeesController {
  constructor(private readonly attendeesService: AttendeesService) {}

  @Get()
  findAll(): Promise<Attendee[]> {
    return this.attendeesService.findAll();
  }

  @Post()
  create(@Body() createAttendeeDto: CreateAttendeeDto): Promise<Attendee> {
    return this.attendeesService.create(createAttendeeDto);
  }
}

