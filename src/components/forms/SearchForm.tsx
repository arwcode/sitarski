'use client'
// modules
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
// components
import {
	ArwFlex,
	ArwForm,
	ArwFormField,
	ArwSelect,
	ArwTitle,
} from '@/components/arw'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// lib
import { generateUrl } from '@/lib/utils'
import { ICategory } from '@/lib/models/category.model'
import { Option } from '@/lib/types'
import { routes } from '@/lib/constants/paths'
import { searchSchema, SearchFormData } from '@/lib/types/zod'
import { debug } from '@/lib/utils/dev'

export default function SearchForm({
	categories,
}: {
	categories: ICategory[]
}) {
	debug(8)
	const router = useRouter()
	const categoryOptions: Option[] = categories.map((category: ICategory) => ({
		value: category.label,
		label: category.label,
	}))

	const form = useForm<SearchFormData>({
		resolver: zodResolver(searchSchema),
		defaultValues: {
			title: '',
			category: '',
		},
	})

	const handleSubmit = ({ title, category }: SearchFormData) => {
		const queryParams: { [key: string]: string | undefined } = {}

		if (title) queryParams.title = title
		if (category) queryParams.category = category

		const route = routes.PROJECTS
		const url = generateUrl([route], queryParams)
		router.push(url)
	}

	return (
		<ArwForm
			form={form}
			onSubmit={handleSubmit}
			className="grow justify-between gap-8"
		>
			<ArwTitle center accent>
				Wyszukaj projekt
			</ArwTitle>

			<ArwFlex>
				<ArwFormField
					label="Tytuł"
					name="title"
					className="justify-center"
					control={form.control}
					render={({ field }) => (
						<Input
							placeholder="Wpisz tytuł"
							className="text-center"
							{...field}
						/>
					)}
				/>
				<ArwFormField
					control={form.control}
					label="Kategoria"
					name="category"
					className="justify-center"
					render={({ field }) => (
						<ArwSelect
							onValueChange={field.onChange}
							placeholder="Wybierz kategorię"
							options={categoryOptions}
							search
							center
						/>
					)}
				/>
			</ArwFlex>
			<ArwFlex>
				<Button variant="accent">Wyszukaj</Button>
			</ArwFlex>
		</ArwForm>
	)
}
