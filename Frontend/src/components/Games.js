import '../styles/Games.css'
import Game from './Game'
import SearchBar from './SearchBar'
import { useState, useEffect } from 'react';
import axios from 'axios';


// The component that is the entire games page.
function Games(){
    
    // Using useState to allow our variables to interact with our search bar.
    const [list, setList] = useState([])
    const [userInput, updateValue] = useState("")
    const [fullList, setFullList] = useState([])
    
    // Makes API call from frontend to backend to retrieve array of games
    // Updates the state to store the array of games
    const fetchGames = async () => {
        const result = await axios.get("http://96.58.110.215:8080/games")
        setFullList(result.data)
    }

    // Engline logic on which questions to ask
    useEffect(() => {
        fetchGames()
    }, [])

    
    // Checks to see if the search bar is blank or not.
    // If the search bar is blank, it will leave the list of games the same.
    // If the search bar has any value in it, the useEffect function will set the list
    // of games to a new list that matches the search bars input. It is not case sensitive.
    useEffect(() => {
        if(userInput !== ""){
            setList(fullList.filter(game => game.name.toLowerCase().includes(userInput.toLowerCase())))
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
                    {list.map((game, index) => <Game name={game.name} imageUrl={game.cover} url={game.url} height="352px" width="264px"/>)}
                </ul>
            </div>
        </div>
    )
}

export default Games;