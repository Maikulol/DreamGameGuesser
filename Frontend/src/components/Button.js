import '../styles/Button.css';

// The creation of a re-useable button component
// currently used in the home page as the 3 portals to about, engine, and games.
function Button(props){
    return (
        <div className="ButtonContainer">
            {props.text}
        </div>
    )
}

export default Button;
