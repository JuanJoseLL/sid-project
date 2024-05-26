import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePeopleDTO } from './dto/create-people.dto';
import { People } from './people.schema';
import { CreateCommentDto } from '../events/dto/create-comment.dto';
import { Comment, CommentSchema } from '../comments/comment.schema';

@Injectable()
export class PeopleService {
  constructor(@InjectModel(People.name) private peopleModel: Model<People>) {}

  async create(createPeopleDTO: CreatePeopleDTO): Promise<People> {
    console.log('Creating People with DTO:', createPeopleDTO);
    const createdPeople = new this.peopleModel(createPeopleDTO);
    return createdPeople.save();
  }

  async findAll(): Promise<People[]> {
    return this.peopleModel.find().exec();
  }

  async findOne(id: string): Promise<People> {
    return this.peopleModel.findById(id).exec();
  } 

}
