import { routes } from '@/lib/constants/paths'
import { Icons } from '@/lib/types/enums'

export type Nav = {
	route: string
	icon?: Icons
	label?: string
	profile?: boolean
	admin?: boolean
}

export const navigation: Nav[] = [
	{
		route: routes.ADMIN,
		icon: Icons.User,
		label: 'Admin',
		admin: true,
	},
	{
		route: routes.HOME,
		label: 'Projekty',
	},
	{
		route: routes.OFFER,
		label: 'Oferta',

	},
	{
		route: routes.CONTACT,
		label: 'Kontakt',
	},
	{
		route: routes.SEARCH,
		icon: Icons.Search,
	},
]
