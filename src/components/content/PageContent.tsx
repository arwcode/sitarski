// modules
import Image from 'next/image'
import { ReactNode } from 'react'
// components
import { ArwContainer, ArwFlex } from '@/components/arw'

export default function PageContent({
	imageSrc,
	imageAlt,
	text,
	aside,
	content,
}: {
	imageSrc: string
	imageAlt: string
	text: ReactNode
	aside: ReactNode
	content: ReactNode
}) {
	return (
		<ArwContainer className="grow gap-4">
			<ArwFlex className="md:flex-row border-b-2 border-base-800 pb-4">
				{/* image */}
				<ArwFlex className="w-full md:w-1/2">
					<Image src={imageSrc} alt={imageAlt} width={1200} height={900} />
				</ArwFlex>
				{/* text */}
				<ArwFlex className="grow justify-center items-center p-4">
					{text}
				</ArwFlex>
			</ArwFlex>
			<ArwFlex row className="max-md:flex-col grow">
				{/* aside */}
				<ArwFlex row className="text-accent w-full md:w-[125px] shrink-0 justify-end max-md:text-right">{aside}</ArwFlex>
				{/* content */}
				<ArwFlex className="grow max-md:border-t-2 md:border-l-2 md:pl-6 max-md:pt-4 border-base-800">
					{content}
				</ArwFlex>
			</ArwFlex>
		</ArwContainer>
	)
}
