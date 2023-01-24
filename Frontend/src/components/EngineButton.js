import '../styles/EngineButton.css';

// The creation of a re-useable button component
// currently used on the engine page
function EngineButton(props){
    return (
        <div className="EngineButtonContainer" onClick={props.onClick}>
            {props.text}
        </div>
    )
}

export default EngineButton;
