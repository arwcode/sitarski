// modules
// components
import { PostForm } from '@/components/forms/PostForm'
import { ArwContainer, ArwFlex, ArwPaper, ArwTitle } from '@/components/arw'
// lib
import { debug } from '@/lib/utils/dev'

export default function PostNewPage() {
	debug(6)
	return (
		<ArwContainer>
			<ArwFlex className="grow">
				<ArwPaper center>
					<ArwTitle>Nowy post</ArwTitle>
				</ArwPaper>
				<PostForm />
			</ArwFlex>
		</ArwContainer>
	)
}
