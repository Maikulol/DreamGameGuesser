import '../styles/Games.css'
import Game from './Game'
import SearchBar from './SearchBar'
import { useState, useEffect } from "react";

function Games(){
    
    const [list, setList] = useState([])
    const [userInput, updateValue] = useState("")
    const [fullList, setFullList] = useState([{
        title: "Valorant",
        url: "www.someurl.com"
    }, {
        title: "CSGO",
        url: "www.csgo.com"
    }, {
        title: "Rocket League",
        url: "www.rl.com"
    }])
    
    
    useEffect(() => {
        if(userInput !== ""){
            setList(fullList.filter(game => game.title.toLowerCase().includes(userInput.toLowerCase())))
        } else {
            setList(fullList)
        }
    }, [userInput, fullList])

    return(
        <div className="Games">
            <div className='SearchBarContainer'>
                <SearchBar value={userInput} onChange={(e) => updateValue(e.target.value)}/>
            </div>
            <div className='GamesListContainer'>
                <ul className="GamesList">
                    {list.map((game) => <Game title={game.title} imageUrl={game.url}/>)}
                </ul>
            </div>
        </div>
    )
}

export default Games;