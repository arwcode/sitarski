'use client'

// modules
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
// components
import { Button } from '@/components/ui/button'
import PostFormDialog from '@/components/dialogs/PostFormDialog'
// lib
import { createPost, updatePost } from '@/lib/actions/post.actions'

// React Quill trzeba importować dynamicznie, bo SSR się wywala
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

export function PostForm({ post }: { post?: any }) {
	const action = post ? updatePost : createPost
	const titleRef = useRef<HTMLInputElement>(null)
	const [content, setContent] = useState(post?.content || '')
	const [title, setTitle] = useState(post?.title || '')
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		titleRef.current?.focus()
	}, [])

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		if (!title.trim() || !content.trim()) {
			e.preventDefault()
			setIsOpen(true)
		}
	}

	return (
		<>
			<form
				action={action}
				className="flex flex-col grow gap-4"
				onSubmit={handleSubmit}
			>
				{/* Title */}
				<input
					ref={titleRef}
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Tytuł"
					className="p-3 w-full font-bold rounded outline-none focus:outline-dashed focus:outline-1 focus:outline-accent focus:outline-offset-0"
				/>

				{/* React Quill editor */}
				<div className="min-h-[200px]">
					<ReactQuill theme="snow" value={content} onChange={setContent} />
				</div>

				{/* Ukryty input, żeby treść wysłała się w FormData */}
				<input type="hidden" name="content" value={content} />

				{post && <input type="hidden" name="slug" value={post.slug} />}

				<Button variant="accent" className="text-md p-6">
					{post ? 'Zapisz zmiany' : 'Dodaj post'}
				</Button>
			</form>

			<PostFormDialog open={isOpen} onClose={() => setIsOpen(false)} />
		</>
	)
}
