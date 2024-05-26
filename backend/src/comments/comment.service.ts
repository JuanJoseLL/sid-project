import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Comment } from './comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(@InjectModel('Comment') private commentModel: Model<Comment>) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const createdComment = new this.commentModel({
      ...createCommentDto,
      evento: new Types.ObjectId(createCommentDto.evento),
      persona: new Types.ObjectId(createCommentDto.persona),
    });
    return createdComment.save();
  }

  async findByEvent(eventId: string): Promise<Comment[]> {
    return this.commentModel.find({ evento: new Types.ObjectId(eventId) })
                            .populate('evento')
                            .populate('persona')
                            .exec();
  }
}
