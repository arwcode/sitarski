// components
import { ArwFlex, ArwLink } from '@/components/arw'
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
				<ArwFlex className="gap-1">
					<h1>Oferta:</h1>
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
			}
		/>
	)
}
