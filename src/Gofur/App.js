import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import { CreateModal } from './modules/create-modal/create-modal.component'
import { FeedbackSingle } from './modules/feedback-single/feedback-single'
import { FeedbacksPage } from './modules/main/main'

export const GofursComponent = () => {
    return(
        <div className='apppp'>
        <BrowserRouter>
            <Routes>
               <Route path='' element={<FeedbacksPage/>}/>
               <Route path='/single/:id' element={<FeedbackSingle/>}/>
               <Route path='/add-feedback' element={<CreateModal/>} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}