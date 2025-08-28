// components
import { ArwFlex, ArwText } from '@/components/arw'
import PageContent from '@/components/content/PageContent'
// lib
import { images } from '@/lib/constants/paths'
import { debug } from '@/lib/utils/dev'

export default function AboutPage() {
	debug(6)
	return (
		<PageContent
			imageAlt="Sitek"
			imageSrc={images.SITEK}
			text={
				<ArwFlex className="gap-1">
					<p className="md:text-2xl text-gray italic">
						Architekt to jednostka ludzka,
					</p>
					<p className="md:text-2xl text-gray-300 italic md:ml-[100px]">
						która spełnia marzenia
					</p>
					<p className="md:text-2xl italic">
						i rozwiązuje problemy innych.
					</p>
				</ArwFlex>
			}
			aside={
				<ArwFlex className="gap-1">
					<p>pomysł</p>
					<p>oryginalność</p>
					<p>indywidualność</p>
				</ArwFlex>
			}
			content={
				// prettier-ignore
				<ArwFlex className="text-justify leading-[1.65]">
					<ArwText>
						Nasze podejście to nie tylko wizja i estetyka, ale też realne innowacje technologiczne. Już w 2001 roku, w ramach projektu <strong>Dom na Chełmie</strong>, po raz pierwszy w Polsce zastosowaliśmy <strong>wielkoformatowe okno z niewidoczną ramą w konstrukcji domu z bali drewnianych</strong> - rozwiązanie, które wtedy wyprzedzało standardowe rozwiązania stosowane w konstrukcjach drewnianych (góralskich). Z kolei w projekcie <strong>Dom w Bystrej Krakowskiej</strong> (2005) opracowaliśmy i wdrożyliśmy unikalne połączenie <strong>drewnianych bali jako wypełnienia sztywnej konstrukcji ramowej z żelbetu</strong>, tworząc spójną, trwałą i nowoczesną hybrydę konstrukcyjną, która do dziś pozostaje rzadkością w polskiej architekturze jednorodzinnej.
					</ArwText>
				</ArwFlex>
			}
		/>
	)
}
