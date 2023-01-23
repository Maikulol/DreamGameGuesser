import '../styles/Games.css'
import Game from './Game'
import SearchBar from './SearchBar'
import { useState, useEffect } from 'react';


// The component that is the entire games page.
function Games(){
    
    // Using useState to allow our variables to interact with our search bar.
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
    
    //TODO: make api request to custom backend

    // useEffect(async () => {
    //     const result = axios.get("url")
    //     console.log(result)
    // }, [])
    
    // Checks to see if the search bar is blank or not.
    // If the search bar is blank, it will leave the list of games the same.
    // If the search bar has any value in it, the useEffect function will set the list
    // of games to a new list that matches the search bars input. It is not case sensitive.
    useEffect(() => {
        if(userInput !== ""){
            setList(fullList.filter(game => game.title.toLowerCase().includes(userInput.toLowerCase())))
        } else {
            setList(fullList)
        }
    }, [userInput, fullList])


    // The structure of the games page.
    return(
        <div className="Games">
            <div className='SearchBarContainer'>
                <SearchBar value={userInput} onChange={(e) => updateValue(e.target.value)}/>
            </div>
            <div className='GamesListContainer'>
                <ul className="GamesList">
                    {list.map((game, index) => <Game title={game.title} imageUrl={game.url}/>)}
                </ul>
            </div>
        </div>
    )
}

export default Games;