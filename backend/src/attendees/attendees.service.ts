import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attendee } from './attendees.schema';
import { CreateAttendeeDto } from './dto/create-attendee.dto';

@Injectable()
export class AttendeesService {
  constructor(
    @InjectModel(Attendee.name) private attendeeModel: Model<Attendee>,
  ) {}

  async findAll(): Promise<Attendee[]> {
    return this.attendeeModel.find().exec();
  }

  async create(createAttendeeDto: CreateAttendeeDto): Promise<Attendee> {
    const createdAttendee = new this.attendeeModel(createAttendeeDto);
    return createdAttendee.save();
  }
}
