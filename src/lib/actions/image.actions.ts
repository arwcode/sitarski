'use server'
// modules
import { v2 as cloudinary } from 'cloudinary'
// lib
import { debug, handleError } from '@/lib/utils/dev'
import { UploadedImage } from '@/lib/types'

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	api_key: process.env.CLOUDINARY_API_KEY,
})


// CREATE
export async function uploadImage(
	formData: FormData
): Promise<UploadedImage | undefined> {
	try {
		const image = formData.get('file') as File
		const imageData = await image.arrayBuffer()
		const mime = image.type
		const encoding = 'base64'
		const base64Data = Buffer.from(imageData).toString(encoding)
		const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data

		const result = await cloudinary.uploader.upload(fileUri, {
			folder: process.env.CLOUDINARY_FOLDER_NAME,
		})

		const uploadedImage: UploadedImage = {
			name: result.original_filename,
			publicID: result.public_id,
			url: result.secure_url,
		}

		debug(2, 9, uploadedImage)
		return uploadedImage
	} catch (error) {
		handleError(error)
	}
}

// DELETE
export async function removeImage(publicId: string) {
	const result = await cloudinary.uploader.destroy(publicId)
	debug(5, 9, result)
	return result
}
export async function removeImages(publicIds: string[]) {
	const result = await cloudinary.api.delete_resources(publicIds)
	debug(5, 9, result)
	return result
}
