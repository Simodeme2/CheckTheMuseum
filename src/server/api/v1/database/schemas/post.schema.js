import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: { type: String, required: true, max: 128 },
  synopsis: { type: String, required: true, max: 256 }
});

export default mongoose.model('Post', PostSchema);