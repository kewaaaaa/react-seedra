import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { FeedbacksItem } from "../feedbacks-item/feedbacks-item.component";
import { getAsyncFeedbacks } from "../feedbacks-slice/feedbacks-slice";
import { Feedbacks } from "./feedbacks-list.style";

export const FeedbacksList = () => {
    const dispatch = useDispatch()
    const status = useSelector(state => state.feedbacks.status)
    if(status === 'idle'){
        dispatch(getAsyncFeedbacks())
    }
    const data = useSelector(state => state.feedbacks.feedbacks)
    console.log(data[0]);
    return(
        <Feedbacks>
            {
                status === 'loading' ? <b>Loading...</b> : status === 'error' ? <b>Server error</b> : data === [] ? <b>empty data</b> : data && data.map((item) => <FeedbacksItem key={item.id} id={item.id} title={item.title} desc={item.description} comments={item.comments} />)
            }
        </Feedbacks>
    )
}