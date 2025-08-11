// modules
import { When } from 'react-if'
// components
import {
	ArwContainer,
	ArwLink,
	ArwPaper,
	ArwText,
	ArwTitle,
} from '@/components/arw'
// lib
import { debug } from '@/lib/utils/dev'
import { getPosts } from '@/lib/actions/post.actions'
import { routes } from '@/lib/constants/paths'
import { checkIsAdmin } from '@/lib/utils'

export default async function PostListPage() {
	debug(6)
	const posts = await getPosts()
	const isAdmin = checkIsAdmin()

	return (
		<ArwContainer>
			<ul className="space-y-4">
				<When condition={isAdmin}>
					<li>
						<ArwLink href={`${routes.POSTS}/new`}>
							<ArwPaper className="px-2 border border-dashed border-accent text-accent hover:text-white text-center transition">
								<ArwText>+ Nowy post</ArwText>
							</ArwPaper>
						</ArwLink>
					</li>
				</When>
				{posts?.map((post: any) => (
					<li key={post._id}>
						<>
							<ArwLink href={`${routes.POSTS}/${post.slug}`}>
								<ArwPaper>
									<ArwText className="px-2">{post.title}</ArwText>
								</ArwPaper>
							</ArwLink>
						</>
					</li>
				))}
			</ul>
		</ArwContainer>
	)
}
