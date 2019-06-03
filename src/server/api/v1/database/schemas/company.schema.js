import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const CompanySchema = new Schema(
    {
        name: { type: String, required: true, max: 128 },
        description: { type: String, required: true, max: 512 },
        slug: {
            type: String, lowercase: true, unique: true, required: true,
        },
        published_at: { type: Date, required: false },
        deleted_at: { type: Date, required: false },
        parentCompanyId: { type: Schema.Types.ObjectId, ref: 'Company', required: false },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

CompanySchema.methods.slugify = function () {
    this.slug = slug(this.name);
};
CompanySchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

CompanySchema.virtual('id').get(function () { return this._id; });
CompanySchema.virtual('subCompanies', {
    ref: 'Company',
    localField: '_id',
    foreignField: 'parentCompanyId',
    justOne: false,
});

CompanySchema.plugin(mongoosePaginate);
export default mongoose.model('Company', CompanySchema);
