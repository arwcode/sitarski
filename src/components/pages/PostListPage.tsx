// modules
// components
import { ArwContainer, ArwLink, ArwPaper, ArwTitle } from '@/components/arw'
// lib
import { debug } from '@/lib/utils/dev'
import { getPosts } from '@/lib/actions/post.actions'
import { routes } from '@/lib/constants/paths'

export default async function PostListPage() {
	debug(6)
	const posts = await getPosts()

	return (
		<ArwContainer>
			<ul className="space-y-4">
				<li>
					<ArwLink href={`${routes.POSTS}/new`}>
						<ArwPaper className="px-2 border border-dashed border-accent text-accent hover:text-white text-center transition">
							<ArwTitle>+ Nowy post</ArwTitle>
						</ArwPaper>
					</ArwLink>
				</li>
				{posts?.map((post: any) => (
					<li key={post._id}>
						<ArwLink href={`${routes.POSTS}/${post.slug}`}>
							<ArwPaper>
								<ArwTitle className="px-2">{post.title}</ArwTitle>
							</ArwPaper>
						</ArwLink>
					</li>
				))}
			</ul>
		</ArwContainer>
	)
}
