// components
import { ArwFlex, ArwLink, ArwText, ArwTitle } from '@/components/arw'
import PageContent from '@/components/content/PageContent'
// lib
import { images } from '@/lib/constants/paths'
import { debug } from '@/lib/utils/dev'

export default function ContactPage() {
	debug(6)
	return (
		<PageContent
			imageAlt="Sitek"
			imageSrc={images.WIELICZKA}
			text={
				<ArwFlex>
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
			}
		/>
	)
}
