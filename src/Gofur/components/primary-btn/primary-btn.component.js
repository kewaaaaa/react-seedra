import { PrBtn } from "./primary-btn.style"

export const UnBtn = ({text, bg, onClick, type}) => {

    return(
        <PrBtn bg ={bg} onClick={onClick} type={type ? type : 'button'} >
            {text}
        </PrBtn>
    )
}