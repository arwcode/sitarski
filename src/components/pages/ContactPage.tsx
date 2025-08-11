// components
import { ArwContainer, ArwFlex, ArwLink } from '@/components/arw'
import PageContent from '@/components/content/PageContent'
// lib
import { images } from '@/lib/constants/paths'
import { debug } from '@/lib/utils/dev'
import Image from 'next/image'

export default function ContactPage() {
	debug(6)
	return (
		<ArwContainer className="grow gap-4">
			<ArwFlex className="md:flex-row border-b-2 border-base-800 pb-4">
				{/* image */}
				<ArwFlex className="w-full md:w-1/2">
					<Image
						src={images.WIELICZKA}
						alt="Wieliczka"
						width={1200}
						height={900}
					/>
				</ArwFlex>
				{/* text */}
				<ArwFlex className="grow justify-center md:items-end p-4 gap-1">
					<p>Pracownia Architektoniczna</p>
					<p>Bartlomiej K. Sitarski</p>
					<p>ul. Sosnowiecka 4</p>
					<p>31-345 Krakow</p>
					<p>tel. 601-965-606</p>
					<p></p>
					<p>
						<ArwLink href="mailto:pracownia@barteksitarski.pl">
							pracownia@barteksitarski.pl
						</ArwLink>
					</p>
					<p>
						<ArwLink href="https://www.barteksitarski.pl">
							www.barteksitarski.pl
						</ArwLink>
					</p>
				</ArwFlex>
			</ArwFlex>
		</ArwContainer>
	)
}
