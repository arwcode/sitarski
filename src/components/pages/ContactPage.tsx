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
					<p className="text-xl text-gray">
						&quot;Architekt to jednostka ludzka,
					</p>
					<p className="text-2xl text-gray-300 italic ml-[100px]">
						która spełnia marzenia
					</p>
					<p className="text-2xl font-bold">
						i rozwiązuje problemy innych.&quot;
					</p>
				</ArwFlex>
			}
			aside={
				<ArwFlex className="leading-loose">
					<p>pomysł</p>
					<p>oryginalność</p>
					<p>indywidualność</p>
				</ArwFlex>
			}
			content={
				<ArwFlex className="leading-loose">
					<p>Pracownia Architektoniczna Bartlomiej K. Sitarski</p>
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
