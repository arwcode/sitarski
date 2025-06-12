// modules
import { Edit, ArrowLeft } from 'lucide-react'
// components
import {
	ArwContainer,
	ArwFlex,
	ArwLink,
	ArwPaper,
	ArwText,
	ArwTitle,
} from '@/components/arw'
import PostDeleteDialog from '@/components/dialogs/PostDeleteDialog'
// lib
import { debug } from '@/lib/utils/dev'
import { getPostBySlug } from '@/lib/actions/post.actions'
import { routes } from '@/lib/constants/paths'

export default async function PostPage({
	params,
}: {
	params: { slug: string }
}) {
	debug(6)
	const post = await getPostBySlug(params.slug)

	if (!post) return <ArwContainer center>Post nie znaleziony</ArwContainer>

	return (
		<ArwContainer>
			<ArwFlex className="grow">
				<ArwPaper className="px-6">
					<ArwFlex row between>
						<ArwTitle>{post.title}</ArwTitle>
						<ArwFlex row>
							<ArwLink
								href={routes.POSTS}
								className="text-gray-500 hover:text-accent flex items-center"
							>
								<ArrowLeft size={25} />
							</ArwLink>
							<ArwLink
								href={`${routes.POSTS}/${post.slug}/edit`}
								className="text-gray-500 hover:text-blue-600 flex items-center"
							>
								<Edit size={22} />
							</ArwLink>
							<ArwFlex>
								<PostDeleteDialog slug={post.slug} />
							</ArwFlex>
						</ArwFlex>
					</ArwFlex>
				</ArwPaper>

				<ArwPaper className="grow px-6">
					<ArwText className="text-justify">{post.content}</ArwText>
				</ArwPaper>
			</ArwFlex>
		</ArwContainer>
	)
}
