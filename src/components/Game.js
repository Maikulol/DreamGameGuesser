import '../styles/Games.css'

function Game(props){
    return(
        <div className="Game" style={{background: "white"}}>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Game;