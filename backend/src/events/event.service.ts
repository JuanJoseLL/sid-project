import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './event.schema';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';
import { Comment, CommentSchema } from '../comments/comment.schema';
import { OracleService } from '../oracle/oracle.service';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { table } from 'console';
import { get } from 'http';
import { ObjectId } from 'mongodb';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<Event>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly oracleService: OracleService) {}

    async create(createEventDto: CreateEventDto): Promise<Event> {
      console.log('Creating event with DTO:', createEventDto);
      const facultadesId = await Promise.all(
        createEventDto.facultades_organizadoras.map(element => this.getFacultadId(element))
      );
      const createdEvent = new this.eventModel({
        ...createEventDto,
        facultades_organizadoras: facultadesId,  
      });
      return createdEvent.save();
  }
  

  async findAll() {
    const cachedEvents = await this.cacheManager.get('events');
    if (cachedEvents) {
      return cachedEvents;
    }
    const events = await this.eventModel.find().exec();
    this.cacheManager.set('events', events)
    return events
  }

  async findOne(titulo: string): Promise<any> {
    const cachedEventId = await this.cacheManager.get<string>(`event_${titulo}`);
    if (cachedEventId) {
      return new ObjectId(cachedEventId);
    }
    const event = await this.eventModel.findOne({ titulo }).exec();
    if (!event) {
      throw new NotFoundException(`Event with title '${titulo}' not found`);
    }
    await this.cacheManager.set(`event_${titulo}`, event._id.toString());

    return event._id;
  }

  async getFacultadId(name: string){
    return this.oracleService.executeQuery('SELECT CODIGO FROM P09779_1_2.FACULTADES WHERE NOMBRE = :name', [name]);
  }

}
