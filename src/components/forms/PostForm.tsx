'use client'
import { useEffect, useRef, useState } from 'react'
import { createPost, updatePost } from '@/lib/actions/post.actions'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
	DialogDescription,
	DialogClose,
} from '@/components/ui/dialog'

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
					className="py-2 px-4 w-full text-xl font-bold rounded"
				/>
				<textarea
					name="content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="Treść"
					className="py-2 px-4 w-full rounded flex-1 resize-none text-justify h-[calc(100vh-400px)]"
				/>
				{post && <input type="hidden" name="slug" value={post.slug} />}
				<Button variant="accent">
					{post ? 'Zapisz zmiany' : 'Dodaj post'}
				</Button>
			</form>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Nieprawidłowe dane</DialogTitle>
						<DialogDescription>
							Proszę wypełnić zarówno tytuł, jak i treść.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter className="mt-4">
						<Button onClick={() => setIsOpen(false)}>OK</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}
