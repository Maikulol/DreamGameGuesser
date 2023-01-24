import '../styles/Games.css'

// The component that acts as the game tiles on the Games.js page.
function Game(props){
    return(
        // Gives each game a url link and an image
        <a href={props.url} target="_blank" className="Game" style={{"height": props.height, "width": props.width}}>
            <img src={props.imageUrl} className="cover"/>
        </a>
    )
}

export default Game;