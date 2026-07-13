import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
const videoSchema = new Schema({
  vedioFile: {
    type: String, //cloudinary url
    required: true,
  },
  thumbnail: {
    type: String, //cloudinary url
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true, 
  },
  views: {
    type: Number,
    required: true,
    default: 0,
  },
  duration: {
    type: Number,
    required: true,
  },
  isPublished: {
    type: Boolean,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
},{timestamps: true});

vedioSchema.plugin(mongoosePaginate);

const Video = mongoose.model('Video', videoSchema);