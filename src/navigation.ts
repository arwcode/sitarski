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
		label: 'Admin',
		admin: true,
	},
	{
		route: routes.PROJECTS,
		label: 'Projekty',
	},
	{
		route: routes.OFFER,
		label: 'Oferta',
	},
	{
		route: routes.ABOUT,
		label: 'O pracowni',
	},
	{
		route: routes.CONTACT,
		label: 'Kontakt',
	},
	{
		route: routes.POSTS,
		label: 'Blog',
	},
]
