import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from '../events/dto/create-comment.dto';
import { Comment } from './comment.schema';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {}

  async create(createCommentDto: CreateCommentDto){
    const createdComment = new this.commentModel(createCommentDto);
    console.log(createdComment, "se creo");
    createdComment.save();
  }

  async findByEvent(evento: string) {
    this.commentModel.find({ evento }).exec();
  }
} 
