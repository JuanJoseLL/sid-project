import { CreateCommentDto } from '../events/dto/create-comment.dto';
import { CommentService } from '../comments/comment.service';
export declare class commentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    addComment(id: string, createCommentDto: CreateCommentDto): Promise<void>;
    getComments(id: string): Promise<void>;
}
