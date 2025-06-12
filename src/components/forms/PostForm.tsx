'use client'
// modules
import { useEffect, useRef, useState } from 'react'
// components
import { Button } from '@/components/ui/button'
import PostFormDialog from '@/components/dialogs/PostFormDialog'
// lib
import { createPost, updatePost } from '@/lib/actions/post.actions'

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
				<input
					ref={titleRef}
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Tytuł"
					className="p-3 w-full text-2xl font-bold rounded outline-none focus:outline-dashed focus:outline-1 focus:outline-accent focus:outline-offset-0"
				/>
				<textarea
					name="content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="Treść"
					className="py-2 px-3 w-full rounded flex-1 resize-none text-justify outline-none focus:outline-dashed focus:outline-1 focus:outline-accent focus:outline-offset-0"
				/>
				{post && <input type="hidden" name="slug" value={post.slug} />}
				<Button variant="accent" className="text-xl p-6">
					{post ? 'Zapisz zmiany' : 'Dodaj post'}
				</Button>
			</form>

			<PostFormDialog open={isOpen} onClose={() => setIsOpen(false)} />
		</>
	)
}
