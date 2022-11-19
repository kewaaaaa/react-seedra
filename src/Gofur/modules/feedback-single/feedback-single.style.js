import styled from 'styled-components'

export const FeedbackCommentsWrapper = styled.div`
margin-top: 24px;
display: block;
padding: 24px;
padding-bottom: 0;
border-radius: 10px;
background-color: #fff;
`
export const CommentsCount = styled.p` 
font-weight: 700;
font-size: 18px;
line-height: 26px;
margin: 0;
padding: 0;
/* identical to box height */

letter-spacing: -0.25px;

color: #3A4374;
margin-bottom: 28px;
`

export const FeedbackCommentsList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
gap: 32px;
`