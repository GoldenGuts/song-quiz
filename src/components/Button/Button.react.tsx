import './button.scss';

const Button = (props: any) => {
  return (
    <div className="Button" onClick={props.onPress} id={props.btnID}>
      <div className="outerButton">
          <div className="button">
            <p id="textInsideButtons">{props.label}</p>
          </div>
      </div>
    </div>
  );
}

export default Button;