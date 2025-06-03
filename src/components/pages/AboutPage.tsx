// components
import { ArwFlex, ArwText, ArwTitle } from '@/components/arw'
import PageContent from '@/components/content/PageContent'
// lib
import { images } from '@/lib/constants/paths'

export default function OfferPage() {
	return (
		<PageContent
			imageAlt="Sitek"
			imageSrc={images.SITEK}
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
				// prettier-ignore
				<ArwFlex className="text-justify leading-loose">
					<ArwText >
						Nasze podejście to nie tylko wizja i estetyka, ale też realne innowacje technologiczne. Już w 2001 roku, w ramach projektu <strong>Dom na Chełmie</strong>, po raz pierwszy w Polsce zastosowaliśmy <strong>wielkoformatowe okno z niewidoczną ramą w konstrukcji domu z bali drewnianych</strong> - rozwiązanie, które wtedy wyprzedzało standardowe rozwiązania stosowane w konstrukcjach drewnianych (góralskich). Z kolei w projekcie <strong>Dom w Bystrej Krakowskiej</strong> (2005) opracowaliśmy i wdrożyliśmy unikalne połączenie <strong>drewnianych bali jako wypełnienia sztywnej konstrukcji ramowej z żelbetu</strong>, tworząc spójną, trwałą i nowoczesną hybrydę konstrukcyjną, która do dziś pozostaje rzadkością w polskiej architekturze jednorodzinnej.
					</ArwText>
				</ArwFlex>
			}
		/>
	)
}
