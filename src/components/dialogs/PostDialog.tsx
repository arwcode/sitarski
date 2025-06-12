'use client'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type PostDialogProps = {
	open: boolean
	onClose: () => void
}

export function PostDialog({ open, onClose }: PostDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Nieprawidłowe dane</DialogTitle>
					<DialogDescription>
						Proszę wypełnić zarówno tytuł, jak i treść.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="mt-4">
					<Button onClick={onClose}>OK</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
