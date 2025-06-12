'use server'
// modules
import { revalidatePath } from 'next/cache'
// lib
import { connectToDatabase } from '@/lib/utils/services'
import { deepClone, generateUniqueSlug } from '@/lib/utils'
import { PostModel } from '@/lib/models/post.model'
import { redirect } from 'next/navigation'
import { routes } from '@/lib/constants/paths'

// CREATE
export async function createPost(formData: FormData) {
	try {
		await connectToDatabase()
		const title = formData.get('title') as string
		const content = formData.get('content') as string
		const slug = await generateUniqueSlug(PostModel, title)

		await PostModel.create({ title, content, slug })
	} catch (error) {
		console.error(error)
	}
	redirect(routes.POSTS)
}

// READ
export async function getPosts() {
	try {
		await connectToDatabase()
		const posts = await PostModel.find().sort({ createdAt: -1 })
		return deepClone(posts)
	} catch (err) {
		console.error(err)
	}
}

export async function getPostBySlug(slug: string) {
	try {
		await connectToDatabase()
		const post = await PostModel.findOne({ slug })
		return deepClone(post)
	} catch (error) {
		console.error(error)
	}
}

// UPDATE
export async function updatePost(formData: FormData) {
	try {
		await connectToDatabase()
		const title = formData.get('title') as string
		const content = formData.get('content') as string
		const slug = formData.get('slug') as string
		const updatedSlug = await generateUniqueSlug(PostModel, title, slug)

		await PostModel.findOneAndUpdate(
			{ slug },
			{
				title,
				content,
				slug: updatedSlug,
			}
		)
	} catch (error) {
		console.error(error)
	}
	redirect(routes.POSTS)
}

// DELETE
export async function deletePostBySlug(formData: FormData) {
	const slug = formData.get('slug') as string
	if (!slug) return

	try {
		await connectToDatabase()
		await PostModel.findOneAndDelete({ slug })
	} catch (error) {
		console.error(error)
	}
	redirect(routes.POSTS)
}
