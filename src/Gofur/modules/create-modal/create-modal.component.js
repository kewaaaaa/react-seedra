import { useState } from "react"
import { UnBtn } from "../../components/primary-btn/primary-btn.component"
import { ErrorText, FeedbackInput, FeedbackInputDesc, FeedbackInputTitle, FeedbackTextarea, Modal, ModalButtons, ModalTitle } from "./create-modal.style"
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import { addFeedback, createFeedback } from "../../components/feedbacks-slice/feedbacks-slice"


export const CreateModal = () => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let [error, setError] = useState(false)
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(title.trim() && desc.trim()) {
            setError(false)
        let feedback = {
            id: nanoid(),
            upvotes:0,
            isUpvoted:false,
            comments: [],
            description:desc,
            title,
            status:'suggestion',
            category: 'feature',
        }
        dispatch(createFeedback(feedback))
        dispatch(addFeedback(feedback))
        navigate('/')
        }else{
            setError(true)
        }
    }
    return(
        <div className="container">
            <Modal onSubmit={handleFormSubmit}>
                <ModalTitle>
                Create New Feedback
                </ModalTitle>
                <FeedbackInputTitle>
                Feedback Title
                </FeedbackInputTitle>
                <FeedbackInputDesc>
                Add a short, descriptive headline
                </FeedbackInputDesc>
                <FeedbackInput value={title} onChange={(e) => setTitle(e.target.value)} />
                <FeedbackInputTitle>
                Feedback Detail
                </FeedbackInputTitle>
                <FeedbackInputDesc>
                Include any specific comments on what should be improved, added, etc.
                </FeedbackInputDesc>
                <FeedbackTextarea rows={3} value={desc} onChange={(e) => setDesc (e.target.value)} />
                {
                    error && (<ErrorText>
                        Areas can't be empty
                    </ErrorText>)
                }
                <ModalButtons>
                    <UnBtn text='Cancel' bg='#3A4374' onClick={() => navigate('/')} />
                    <UnBtn text='Add feedback' bg='#AD1FEA' type={'submit'} />
                </ModalButtons>
            </Modal>
        </div>
    )
}