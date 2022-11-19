import { FeedbacksList } from "../../components/feedbacks-list/feedbacks-list.component"
import { UnBtn } from "../../components/primary-btn/primary-btn.component"
import { useNavigate } from 'react-router-dom'

export const FeedbacksPage = () => {
    const navigate = useNavigate()
    return(
        <div className="container feedbacks-main">
            <UnBtn text='+ Add Feedback' bg='#AD1FEA' onClick={() => navigate('/add-feedback')} />
            <FeedbacksList/>
        </div>
    )
}