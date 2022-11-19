import { FeedbacksItem } from "../../components/feedbacks-item/feedbacks-item.component"
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './feedback-single.scss'
import { CommentsCount, FeedbackCommentsList, FeedbackCommentsWrapper } from "./feedback-single.style"
import { getAsyncFeedbacks } from "../../components/feedbacks-slice/feedbacks-slice"
import { useEffect } from "react"
import { CommentItem } from "../../components/comment-item/comment-item.component"
import { BackBtn } from "../../components/back-btn/back-btn.component"


export const FeedbackSingle = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAsyncFeedbacks())
    }, [dispatch])
    
    const data = useSelector(state => state.feedbacks.feedbacks)
    const param = useParams()
    const currentId = param.id
    const current = data && data.find(current => `${current.id}` === `${currentId}`)
    return(
        current ? (<div className="singleMain">
        <BackBtn url='/' text='Go Back' />
        <FeedbacksItem comments={current.comments} title={current.title} desc={current.description} id={current.id} />
        <FeedbackCommentsWrapper>
            <CommentsCount>
            {current.comments.length || 0} Comments
            </CommentsCount>
            <FeedbackCommentsList>
                {
                    current.comments === [] ? <b>There is no comments yet</b> : current.comments.map(comment => <CommentItem img={comment.user.image} content={comment.content} name={comment.user.name} email={ comment.user.username} key={comment.id} />)
                }
            </FeedbackCommentsList>
        </FeedbackCommentsWrapper>
    </div>) : <b>Loading...</b>
    )
}