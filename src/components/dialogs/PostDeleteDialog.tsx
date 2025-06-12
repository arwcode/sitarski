'use client'
// modules
import { useState } from 'react'
import { Trash } from 'lucide-react'
// components
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
// lib
import { deletePostBySlug } from '@/lib/actions/post.actions'

export default function PostDeleteDialog({ slug }: { slug: string }) {
	const [open, setOpen] = useState(false)

	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				className="text-gray-500 hover:text-red-600 flex items-center"
			>
				<Trash size={22} />
			</button>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Potwierdzenie usunięcia</DialogTitle>
						<DialogDescription>
							Tej operacji nie można cofnąć.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter className="mt-4 gap-2">
						<form action={deletePostBySlug}>
							<input type="hidden" name="slug" value={slug} />
							<Button variant="destructive" type="submit">
								Usuń
							</Button>
						</form>
						<Button variant="outline" onClick={() => setOpen(false)}>
							Anuluj
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}
