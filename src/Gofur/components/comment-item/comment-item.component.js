import { Comment, CommentContent, CommentImage, CommentUserDesc, CommentUserEmail, CommentUserName } from "./comment-item.style"

export const CommentItem = ({name, email, content, img}) => {
    return(
        <Comment>
            <CommentImage src={img} />
            <CommentContent>
                <CommentUserName>
                    {name}
                </CommentUserName>
                <CommentUserEmail>
                    {email}
                </CommentUserEmail>
                <CommentUserDesc>
                    {content}
                </CommentUserDesc>
            </CommentContent>
        </Comment>
    )
}