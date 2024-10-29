// modules
import Link from 'next/link'
import { When } from 'react-if'
// components
import { ArwFlex, ArwPaper, ArwText } from '@/components/arw'
import ProjectManipulations from '@/components/shared/manipulations/ProjectManipulations'
// lib
import { debug } from '@/lib/utils/dev'
import { cn, generateUrl, getBaseRoute, transformImageUrl } from '@/lib/utils'
import { ICategory } from '@/lib/models/category.model'
import { IProject } from '@/lib/models/project.model'

export default function ProjectCard({
	project,
	categories,
	searchParams,
	profile,
	admin,
}: {
	project: IProject
	categories: ICategory[]
	searchParams?: any
	profile?: boolean
	admin?: boolean
}) {
	debug(7)
	const route = getBaseRoute(profile, admin)
	const coverUrl = project?.cover?.url
		? transformImageUrl(project.cover.url, 'h_400')
		: null

	return (
		<ArwPaper className="relative justify-between px-3 py-2 group aspect-video overflow-hidden">
			{/* cover */}
			<div
				className="absolute inset-0 group-hover:opacity-80 transition"
				style={{
					backgroundImage: coverUrl ? `url(${coverUrl})` : 'none',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			<Link
				href={generateUrl([route, project.slug], searchParams)}
				className="absolute inset-0 z-20"
			/>
			<ArwFlex row between className="relative items-start">
				{/* title */}
				<ArwText
					className={cn(
						'text-transparent group-hover:text-white drop-shadow transition cursor-pointer relative z-10'
					)}
				>
					{project.title}
				</ArwText>

				{/* manipulation */}
				<When condition={profile || admin}>
					<ProjectManipulations
						project={project}
						categories={categories}
						className={cn('relative z-30 text-white drop-shadow')}
					/>
				</When>
			</ArwFlex>
		</ArwPaper>
	)
}
