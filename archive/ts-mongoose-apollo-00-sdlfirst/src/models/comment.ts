import { composeWithMongoose } from 'graphql-compose-mongoose';
import { model, Schema } from 'mongoose';

export const CommentSchema: Schema = new Schema(
  {
    body: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
      description: '게시글',
    },
    text: {
      type: String,
      trim: true,
      required: true,
      description: '댓글',
    },
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      description: '글쓴이',
    },
    reply: {
      type: [Schema.Types.ObjectId],
      ref: 'Comment',
      description: '대댓글',
    },
  },
  {
    collection: 'comments',
    timestamps: true,
  }
);

CommentSchema.index({ createdAt: 1, updatedAt: 1 });

export const Comment = model('Comment', CommentSchema);
export const CommentTC = composeWithMongoose(Comment);
