import "./button.scss";

function button(proms) {
  return (
    <a className="button-b" href="https:/google.com/" target="_blank">
      {proms.text}
    </a>
  );
}

export default button;
