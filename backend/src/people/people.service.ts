import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePeopleDTO } from './dto/create-people.dto';
import { People } from './people.schema';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';
import { Comment, CommentSchema } from '../comments/comment.schema';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { ObjectId } from 'mongodb';

@Injectable()
export class PeopleService {
  constructor(
    @InjectModel(People.name) private peopleModel: Model<People>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async create(createPeopleDTO: CreatePeopleDTO): Promise<People> {
    console.log('Creating People with DTO:', createPeopleDTO);
    const createdPeople = new this.peopleModel(createPeopleDTO);
    return createdPeople.save();
  }

  async findAll() {
    const cachedPeople = await this.cacheManager.get('people');
    if (cachedPeople) {
      return cachedPeople;
    }
    const people = await this.peopleModel.find().exec();
    this.cacheManager.set('people', people)
    return people
  }

  async findOne(nombre_completo: string): Promise<any> {
    const cachedPersonId = await this.cacheManager.get<string>(`event_${nombre_completo}`);
    if (cachedPersonId) {
      return new ObjectId(cachedPersonId);
    }
    const person = await this.peopleModel.findOne({ nombre_completo }).exec();
    if (!person) {
      throw new NotFoundException(`La persona con el nombre '${nombre_completo}' no está registrada`);
    }
    await this.cacheManager.set(`person_${nombre_completo}`, person._id.toString());

    return person._id;
  } 

  

  

}