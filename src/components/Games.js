import '../styles/Games.css'
import Game from './Game'
import SearchBar from './SearchBar'

function Games(){
    return(
        <div className="Games">
            <div className='SearchBarContainer'>
                <SearchBar/>
            </div>
            <div className='GamesListContainer'>
                <ul className="GamesList">
                    {GamesList.map((game) => <Game title={game.title} imageUrl={game.url}/>)}
                </ul>
            </div>
        </div>
    )
}

const GamesList = [{
    title: "Valorant",
    url: "www.someurl.com"
} , {
    title: "CSGO",
    url: "www.csgo.com"
}, {
    title: "Rocket League",
    url: "www.rl.com"
}, {
    title: "CSGO",
    url: "www.csgo.com"
}, {
    title: "Rocket League",
    url: "www.rl.com"
}, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "Valorant",
        url: "www.someurl.com"
    } , {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }];

    export default Games;