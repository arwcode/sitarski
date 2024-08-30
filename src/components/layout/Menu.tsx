'use client'
// modules
import { useState } from 'react'
import { useRouter } from 'next/navigation'
// components
import { ArwIcon } from '@/components/arw'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Navigation from '@/components/layout/Navigation'
// lib
import { Icons } from '@/lib/types/enums'
import { routes } from '@/lib/constants/paths'
import { useKeys, useSwipe } from '@/lib/utils/hooks'

export default function Menu({ isAdmin }: { isAdmin: boolean }) {
	const [isSheetOpen, setIsSheetOpen] = useState(false)
	const router = useRouter()

	useKeys({ F2: () => router.push(routes.SEARCH) })
	useSwipe({ SwipeUp: () => setIsSheetOpen(false) }, isSheetOpen)

	return (
		<div className="flex-center">
			<Navigation className="max-md:hidden" isAdmin={isAdmin} />
			<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen} modal>
				<SheetTrigger className="md:hidden pr-3">
					<ArwIcon
						icon={Icons.Menu}
						className="hover:text-accent transtion"
						size={30}
					/>
				</SheetTrigger>
				<SheetContent
					side="top"
					className="backdrop-blur-md bg-base-200/50 dark:bg-base-950/50 border-none flex-center min-h-[75px]"
				>
					<Navigation setOpen={setIsSheetOpen} isAdmin={isAdmin} />
				</SheetContent>
			</Sheet>
		</div>
	)
}
