// components
import { ArwFlex } from '@/components/arw'
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
					<p className="text-xl text-gray">&quot;Architekt to jednostka ludzka,</p>
					<p className="text-2xl text-gray-300 italic ml-[100px]">
						która spełnia marzenia
					</p>
					<p className="text-2xl font-bold">i rozwiązuje problemy innych.&quot;</p>
				</ArwFlex>
			}
			aside={
				<ArwFlex>
					<p>pomysł</p>
					<p>oryginalność</p>
					<p>indywidualność</p>
				</ArwFlex>
			}
			content={
				<ArwFlex>
					<h1>Oferta:</h1>
					<ul>
						<li>- Budynki jednorodzinne</li>
						<li>- Budynki wielorodzinne</li>
						<li>- Budynki usługowe</li>
					</ul>
				</ArwFlex>
			}
		/>
	)
}
