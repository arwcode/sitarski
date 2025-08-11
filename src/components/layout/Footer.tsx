import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="h-[56px] z-40 bottom-0 flex-center backdrop-blur-md bg-base-200/50 dark:bg-base-950/50 p-4">
			<Link href={`/sign-in`} className="hover:text-accent transition px-2">
				<p>ARWcode © 2025</p>
			</Link>
		</footer>
	)
}
