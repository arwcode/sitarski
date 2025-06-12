// modules
// components
import { ArwContainer, ArwFlex, ArwPaper, ArwTitle } from '@/components/arw'
import { PostForm } from '@/components/forms/PostForm'
// lib
import { getPostBySlug } from '@/lib/actions/post.actions'
import { debug } from '@/lib/utils/dev'

export default async function PostEditPage({
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
				<ArwPaper center>
					<ArwTitle>Edytuj post</ArwTitle>
				</ArwPaper>
				<PostForm post={post} />
			</ArwFlex>
		</ArwContainer>
	)
}
