// components
import { ArwFlex, ArwLink, ArwText } from '@/components/arw'
import PageContent from '@/components/content/PageContent'
import { getCategories } from '@/lib/actions/category.actions'
// lib
import { DataResult } from '@/lib/types'
import { debug } from '@/lib/utils/dev'
import { generateUrl } from '@/lib/utils'
import { ICategory } from '@/lib/models/category.model'
import { images, routes } from '@/lib/constants/paths'

export default async function OfferPage() {
	debug(6)
	const { data: categories }: DataResult<ICategory[]> = await getCategories()
	return (
		<PageContent
			imageAlt="Dom jednorodzinny"
			imageSrc={images.BYSTRA}
			text={
				<ArwFlex className="gap-1">
					<p className="md:text-2xl text-gray italic">
						Architekt to jednostka ludzka,
					</p>
					<p className="md:text-2xl text-gray-300 italic md:ml-[100px]">
						która spełnia marzenia
					</p>
					<p className="md:text-2xl italic">i rozwiązuje problemy innych.</p>
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
				<ArwFlex className="gap-2 leading-[1.65]">
					{/* prettier-ignore */}
					<ArwText>
						W Pracowni Architektonicznej Bartłomieja K.	Sitarskiego tworzymy <b>unikatowe, nowoczesne projekty</b>, które	powstają w ścisłej współpracy z inwestorem - od pierwszego szkicu, aż po ostatni detal wnętrza. Specjalizujemy się w <b>realizacjach „szytych na miarę”</b>, które łączą wysoką estetykę
						z techniczną precyzją, odpowiadając na potrzeby najbardziej	wymagających klientów.
					</ArwText>
					<ArwFlex className="gap-1">
						<h1>
							<b>Kompleksowa obsługa inwestycji:</b>
						</h1>
						<ul className="list-disc pl-5">
							<li>
								<b>Pełny zakres projektowy</b> - koncepcyjny, budowlany,
								wykonawczy oraz wnętrzarski.
							</li>
							<li>
								<b>Całościowy nadzór wykonawczy</b> - gwarantujemy zgodność
								realizacji z założeniami projektowymi.
							</li>
							<li>
								<b>Sprawdzona baza podwykonawców</b> - współpracujemy wyłącznie
								z doświadczonymi ekipami, co przekłada się na najwyższą jakość
								wykonania.
							</li>
							<li>
								<b>Kompleksowa obsługa formalno-prawna</b> - reprezentujemy
								inwestora w procedurach administracyjnych, uzgodnieniach i
								pozwoleniach.
							</li>
						</ul>
					</ArwFlex>
					{/* prettier-ignore */}
					<ArwText>
						Nie tworzymy projektów seryjnych. Każda inwestycja to osobna opowieść - oparta na funkcjonalności, dopracowanych proporcjach i dopasowana do konkretnego miejsca, stylu życia i ambicji inwestora.
					</ArwText>
					{/* prettier-ignore */}
					<ArwText>
						<b>Tworzymy architekturę z charakterem. Z odwagą podejmujemy się także złożonych i nietypowych wyzwań.
						</b> Jeśli szukasz partnera, który poprowadzi Twoją inwestycję z pełnym	zaangażowaniem i dbałością o każdy etap - jesteś we właściwym	miejscu.
					</ArwText>
					<ArwFlex className="gap-1">
						<h1>
							<b>Nasza oferta obejmuje:</b>
						</h1>
						<ul className="list-disc pl-5 space-y-1">
							{categories.map((category) => (
								<li key={category.label}>
									<ArwLink
										href={generateUrl([routes.PROJECTS], {
											category: category.label,
										})}
									>
										{category.label}
									</ArwLink>
								</li>
							))}
						</ul>
					</ArwFlex>
				</ArwFlex>
			}
		/>
	)
}
