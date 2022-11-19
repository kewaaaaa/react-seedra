import styled from 'styled-components'

export const Modal = styled.form` 
background: #FFFFFF;
border-radius: 10px;
max-width: 540px;
width: 100%;
margin-right: auto;
margin-left: auto;
padding: 52px 42px 40px;
display: flex;
flex-direction: column;
z-index: 1000;
`
export const ModalTitle = styled.h3` 
padding: 0;
margin: 0;
font-weight: 700;
font-size: 24px;
line-height: 35px;
letter-spacing: -0.333333px;
color: #3A4374;
margin-bottom: 40px;
`
export const FeedbackInputTitle = styled.p` 
font-weight: 700;
font-size: 14px;
line-height: 20px;
letter-spacing: -0.194444px;
color: #3A4374;
margin: 0;
padding: 0;
margin-bottom: 2px;
`
export const FeedbackInputDesc = styled.p` 
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #647196;
margin: 0;
padding: 0;
margin-bottom: 16px;
`
export const FeedbackInput = styled.input` 
background: #F7F8FD;
border-radius: 5px;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: #3A4374;
padding: 13px 24px;
outline: none;
border: none;
margin-bottom: 24px;
`
export const FeedbackTextarea = styled.textarea` 
resize: none;
background: #F7F8FD;
border-radius: 5px;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: #3A4374;
padding: 13px 24px;
outline: none;
border: none;
margin-bottom: 32px;
`

export const ModalButtons = styled.div` 
display: flex;
align-items: center;
justify-content: flex-end;
gap: 20px;
`

export const ErrorText = styled.p` 
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #D73737;
margin-bottom: 10px;
`