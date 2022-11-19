import './islom.css'

function Islom(props) {
  return (
    <div className='card'>
      <div className='image'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU" alt="" />
      </div>
      <div className='content'>
        <h1>Name: {props.name}</h1>
        <p>Job: {props.job}</p>
        <button >
          Read more
        </button>
      </div>
    </div>
  )
}

export default Islom