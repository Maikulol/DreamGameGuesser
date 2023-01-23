import '../styles/Games.css'

// The component that acts as the game tiles on the Games.js page.
function Game(props){
    return(
        <div className="Game">
            <h3>{props.title}</h3>
        </div>
    )
}

export default Game;