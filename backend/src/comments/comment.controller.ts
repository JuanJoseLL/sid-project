import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCommentDto } from '../events/dto/create-comment.dto';
import { CommentService } from '../comments/comment.service';

@Controller('comments')
export class commentController {
  constructor(
    private readonly commentService: CommentService
  ) {}

  @Post(':id')
  async addComment(@Param('id') id: string, @Body() createCommentDto: CreateCommentDto) {
    createCommentDto.evento = id;
    console.log("ewe")
    return  this.commentService.create(createCommentDto);
  }

  @Get(':id')
  async getComments(@Param('id') id: string) {
    return  this.commentService.findByEvent(id);
  }
}
