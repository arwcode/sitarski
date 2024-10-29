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
				<ArwFlex>
					<p>pomysł</p>
					<p>oryginalność</p>
					<p>indywidualność</p>
				</ArwFlex>
			}
			content={
				<ArwFlex>
					<h1>Oferta:</h1>
					<ul className="list-disc pl-5 space-y-4">
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
