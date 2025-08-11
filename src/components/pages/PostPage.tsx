// modules
import { When } from 'react-if'
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
import { checkIsAdmin } from '@/lib/utils'

export default async function PostPage({
	params,
}: {
	params: { slug: string }
}) {
	debug(6)
	const post = await getPostBySlug(params.slug)
	const isAdmin = checkIsAdmin()

	if (!post) return <ArwContainer center>Post nie znaleziony</ArwContainer>

	return (
		<ArwContainer>
			<ArwFlex className="grow">
				<ArwPaper className="px-6">
					<ArwFlex row between>
						<ArwText>{post.title}</ArwText>
						<ArwFlex row>
							{/* back */}
							<ArwLink
								href={routes.POSTS}
								className="hover:text-accent transition flex items-center"
							>
								<ArrowLeft size={24} />
							</ArwLink>
							<When condition={isAdmin}>
								{/* edit */}
								<ArwLink
									href={`${routes.POSTS}/${post.slug}/edit`}
									className="hover:text-blue-600 transition flex items-center"
								>
									<Edit size={22} />
								</ArwLink>
								{/* delete */}
								<ArwFlex>
									<PostDeleteDialog slug={post.slug} />
								</ArwFlex>
							</When>
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
