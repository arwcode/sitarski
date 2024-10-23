// modules
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// components
import { ArwLink } from '@/components/arw'
import Menu from '@/components/layout/Menu'
// lib
import { checkIsAdmin } from '@/lib/utils'

export default function Header() {
	const isAdmin = checkIsAdmin()

	return (
		<header className="sticky z-50 top-0 backdrop-blur-md bg-base-200/50 dark:bg-base-950/50 shadow-md p-4 h-[75px] flex-center">
			<div className="container flex justify-between p-0 xl:px-4">
				{/* left */}
				<div className="flex items-center z-50">
					<h1 className="text-2xl font-bold">
						<ArwLink href={`/`}>
							<Image
								src="/images/logo.jpg"
								alt="Logo"
								width={132}
								height={75}
							/>
						</ArwLink>
					</h1>
				</div>

				{/* center */}
				<div className="arw-absolute-center z-50">
					<SignedIn>
						<UserButton afterSignOutUrl="/" />
					</SignedIn>
				</div>

				{/* left */}
				<Menu isAdmin={isAdmin} />
			</div>
		</header>
	)
}
