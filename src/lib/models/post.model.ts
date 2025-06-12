// modules
import { Schema, model, models, Document } from 'mongoose'

export interface IPost extends Document {
	_id: string
	title: string
	content: string
	slug: string
}

const PostSchema = new Schema(
	{
		title: { type: String, required: true },
		content: { type: String, required: true },
		slug: { type: String, required: true },
	},
	{ timestamps: true }
)

export const PostModel = models?.Post || model<IPost>('Post', PostSchema)
