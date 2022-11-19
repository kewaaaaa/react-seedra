import "./ownComponent.css";

function Nodir(props) {
  return (
    <div className="card">
      <div className="img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOue0wnh1n1ypelV92_aK4CXde74d7kB1dag&usqp=CAU"
          alt="user-img"
        />
      </div>
      <div className="text">
        <p className="name">${props.name}</p>
        <p className="title">${props.title}</p>
      </div>
    </div>
  );
}

export default Nodir;
