import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(eventId: string, createCommentDto: CreateCommentDto): Promise<import("./comment.schema").Comment>;
    getCommentsByEvent(eventId: string): Promise<import("./comment.schema").Comment[]>;
}
