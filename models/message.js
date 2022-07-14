import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
    messageText: {type: String, required: true, minLength: 1},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    creationDate: {type: Date, default: Date.now, required: true}
    }
);

MessageSchema.virtual('formattedCreationDate').get(function() {
    return  this.creationDate.getDate() + '/' + this.creationDate.getMonth() + '/' + this.creationDate.getFullYear();
});

MessageSchema.virtual('url').get(function() {
    return '/message/' + this._id;
});

export const Message = mongoose.model('Message', MessageSchema);