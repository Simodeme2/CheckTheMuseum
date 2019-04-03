import mongoose from 'mongoose';
import slug from 'slug';

const { Schema } = mongoose;

const PostSchema = new Schema(
    {
        title: { type: String, required: true, max: 128 },
        synopsis: { type: String, required: true, max: 512 },
        body: { type: String, required: false },
        slug: {
            type: String, lowercase: true, unique: true, required: true,
        },
        published_at: { type: Date, required: false },
        deleted_at: { type: Date, required: false },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

PostSchema.virtual('id').get(function () { return this._id; });

PostSchema.methods.slugify = function () {
    this.slug = slug(this.title);
};

PostSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});


export default mongoose.model('Post', PostSchema);
