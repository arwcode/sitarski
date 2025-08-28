// modules
import { useAuth } from '@clerk/nextjs'
// components
import { ArwIcon, ArwLink } from '@/components/arw'
import NavItem from '@/components/layout/nav/NavItem'
import Link from 'next/link'

// lib
import { navigation } from '@/navigation'
import { cn } from '@/lib/utils'
import { Icons } from '@/lib/types/enums'

export default function Navigation({
	setOpen,
	className,
	isAdmin,
}: {
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>
	className?: string
	isAdmin: boolean
}) {
	const { isSignedIn } = useAuth()

	return (
		<nav className={cn('flex-center', className)}>
			<ul className="flex max-md:flex-col gap-4">
				{navigation.map((item) => {
					return (
						<NavItem
							key={item.route}
							item={item}
							admin={isAdmin}
							profile={isSignedIn}
							setOpen={setOpen}
						/>
					)
				})}
				<ArwLink
					href="https://www.facebook.com/Pracownia-architektoniczna-Bartłomiej-K-Sitarski-109479105878843"
					className="flex-center"
				>
					<ArwIcon icon={Icons.Facebook} />
				</ArwLink>
				<ArwLink
					href="https://www.instagram.com/bartlomiejsitarski/?igsh=MXJrOXczaW1qd3Rndg#"
					className="flex-center"
				>
					<ArwIcon icon={Icons.Instagram} />
				</ArwLink>
				<ArwLink
					href="https://www.linkedin.com/in/bart%C5%82omiej-sitarski-902224313"
					className="flex-center"
				>
					<ArwIcon icon={Icons.Linkedin} />
				</ArwLink>
			</ul>
		</nav>
	)
}
