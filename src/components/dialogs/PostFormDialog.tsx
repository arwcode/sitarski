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

export default function PostFormDialog({ open, onClose }: PostDialogProps) {
	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className="close-button-hidden">
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
