import mongoose, {Schema} from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  vedio: {
    type: Schema.Types.ObjectId,
    ref: 'Video',
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
}, {timestamps: true});

commentSchema.plugin(mongoosePaginate);

const Comment = mongoose.model('Comment', commentSchema);
