import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const FeedbaackItem = styled.li`
    padding: 28px 32px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
`
export const FeedbackTitle = styled(Link)` 
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3A4374;
    margin: 0;
    text-decoration: none;

&::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    content: '';
    cursor: pointer;
}
`
export const FeedbackDesc = styled.p` 
font-weight: 400;
font-size: 16px;
line-height: 23px;

color: #647196;
margin: 0;

`
export const FeedbackComments = styled.p` 
font-weight: 400;
font-size: 16px;
line-height: 23px;

color: #3A4374;
margin: 0;
`