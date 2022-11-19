import styled from 'styled-components'

export const Comment = styled.li `
background-color: #fff;
display: flex;
align-items: flex-start;
gap: 32px;
padding-bottom: 32px;
&:not(:last-child) {
    border-bottom: 1px solid #8C92B3;
}
`
export const CommentImage = styled.img` 
    width: 40px;
    height: 40px;
    border-radius: 50%;

`
export const CommentContent = styled.div``
export const CommentUserName = styled.h3` 
font-weight: 700;
font-size: 14px;
line-height: 20px;
letter-spacing: -0.194444px;
color: #3A4374;
margin: 0;
`
export const CommentUserEmail = styled.p` 
margin-top: 0;
margin-bottom: 17px;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #647196;
`
export const CommentUserDesc = styled.p` 
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: #647196;
`