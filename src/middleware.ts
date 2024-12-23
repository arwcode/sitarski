import { authMiddleware } from '@clerk/nextjs'
import { routes } from '@/lib/constants/paths'

export default authMiddleware({
	publicRoutes: [
		routes.ABOUT,
		routes.API_CLERK,
		routes.API_STRIPE,
		routes.CONTACT,
		routes.HOME,
		routes.OFFER,
		routes.PROJECTS_SLUGS,
		routes.PROJECTS,
		routes.SEARCH,
	],
})

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
