import { Link } from 'react-router-dom'
import { GetBack } from './back-btn.style'

export const BackBtn = ({url, text}) => {
    return(
        <GetBack to={url}>
            {text}
        </GetBack>
    )
}