import { composeWithMongoose } from 'graphql-compose-mongoose';
import mongoose, { Schema } from 'mongoose';

import { CommentSchema } from './comment';

export const PostSchema: Schema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      description: '제목',
    },
    content: {
      type: String,
      trim: true,
      required: true,
      description: '내용',
    },
    published: {
      type: Boolean,
      trim: true,
      required: true,
      default: false,
      description: '발행여부',
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      description: '글쓴이',
    },
    categories: {
      type: [String],
      default: [],
      description: '카테고리',
    },
    comments: {
      type: [CommentSchema],
      ref: 'Comment',
      description: '댓글 목록',
    },
    keywords: {
      type: [String],
      default: [],
      description: '키워드',
    },
    tags: {
      type: [String],
      default: [],
      description: '태그',
    },
  },
  {
    collection: 'posts',
    timestamps: true,
  }
);

PostSchema.index({ createdAt: 1, updatedAt: 1 });

export const Post = mongoose.model('Post', PostSchema);
export const PostTC = composeWithMongoose(Post);
