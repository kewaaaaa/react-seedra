import '../Javohir/javohir.scss'

function Javohir() {
    return (
        <div className='bigbox'>
            <div className='box'>
                <div>
                    <form className='log'>
                        <input className='input' type="text" placeholder="Username or Email" />
                        <input className='input' type="password" placeholder="Write your password" />

                        <div className='btncheck'>
                            <span>
                                <input type="checkbox" />
                                Remmember Me
                            </span>

                            <button type="button">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className='imgbox'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUVMYmLNXM3q3GmBP-wjRVQWHkqACv2Pb7Mw&usqp=CAU" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Javohir