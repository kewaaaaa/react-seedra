import { FeedbaackItem, FeedbackComments, FeedbackDesc, FeedbackTitle } from "./feedbacks-item.style"

export const FeedbacksItem = ({id, title, comments, desc}) => {
    return(
        <FeedbaackItem data-id={id}>
            <FeedbackTitle to={`/single/${id}`}>
                {title}
            </FeedbackTitle>
            <FeedbackDesc>
                {desc}
            </FeedbackDesc>
            <FeedbackComments>Comments {comments.length || 0}</FeedbackComments>
        </FeedbaackItem>
    )
}