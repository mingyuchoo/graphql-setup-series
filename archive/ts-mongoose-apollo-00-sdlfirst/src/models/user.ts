import { composeWithMongoose } from 'graphql-compose-mongoose';
import { model, Schema } from 'mongoose';

export const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
      description: '이메일주소',
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
      description: '이름',
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
      description: '성',
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER',
      trim: true,
      required: true,
      description: '역할',
    },
    profile: {
      bio: {
        type: String,
        trim: true,
        description: '소개글',
      },
      gender: {
        type: String,
        enum: ['MAN', 'WOMAN'],
        trim: true,
        description: '성별',
      },
      contactNumber: {
        type: String,
        trim: true,
        description: '연락처',
      },
    },
    posts: {
      type: [Schema.Types.ObjectId],
      ref: 'Post',
      required: false,
      description: '등록한 글 목록',
    },
  },
  {
    collection: 'users',
    timestamps: true,
  }
);

UserSchema.index({ createdAt: 1, updatedAt: 1 });

export const User = model('User', UserSchema);
export const UserTC = composeWithMongoose(User);
