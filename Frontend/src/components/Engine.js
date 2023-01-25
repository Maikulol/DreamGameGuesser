import '../styles/Engine.css'
import robot from '../assets/enginerobot.gif'
import { useState } from 'react'
import EngineButton from './EngineButton';
import { useEffect } from 'react';
import Game from './Game';
import axios from 'axios';

// The entire engine page
function Engine(){

    // Set of questions to show the user
    const questionSet = new Map([
        [1, "How strict do you want the engine to be?"],
        [2, "What type of game do you prefer?"],
        [3, "Do you like shooter games?"],
        [4, "Do you like adventure games?"],
        [5, "Do you enjoy simulators?"],
        [6, "Are you a role player?"],
        [7, "Are you interested in sports games?"],
        [8, "Are you interested in racing games?"],
        [9, "Do you like Hack and Slash games?"]
    ])
    
    // Set of answers for first button
    const answerSet1 = new Map([
        [1, "STRICT"],
        [2, "SINGLEPLAYER"],
        [3, "YES"],
        [4, "YES"],
        [5, "YES"],
        [6, "YES"],
        [7, "YES"],
        [8, "YES"],
        [9, "YES"]
    ])

    // Set of answers for second button
    const answerSet2 = new Map([
        [1, "LENIENT"],
        [2, "MULTIPLAYER"],
        [3, "NO"],
        [4, "NO"],
        [5, "NO"],
        [6, "NO"],
        [7, "NO"],
        [8, "NO"],
        [9, "NO"]
    ])
    
    // useState is used to update the onscreen text such as the question being asked and the text on the buttons
    const [questionCount, setQuestionCount] = useState(1);
    const [userInput, setUserInput] = useState(new Map());
    const [question, setQuestion] = useState(questionSet.get(questionCount));
    const [leftText, setLeftText] = useState(answerSet1.get(questionCount));
    const [rightText, setRightText] = useState(answerSet2.get(questionCount));
    const [end, setEnd] = useState(false);
    const [newList, setNewList] = useState([]);

    // Changes the question and buttons on screen according to the questionCount
    const updateScreen = () => {
        setQuestion(questionSet.get(questionCount));
        setLeftText(answerSet1.get(questionCount));
        setRightText(answerSet2.get(questionCount));
    }

    // Cycles through the questions by incrementing question count
    const goToNextQuestion = (text) => {
        updateUserInput(text);
        setQuestionCount(questionCount + 1);
    }

    // Function used exclusively for skipping certain questions that may be irrelevant
    const jumpToQuestion = (number) => {
        setQuestionCount(number)
    }
    
    // Updates the recored user input
    const updateUserInput = (text) => {
        setUserInput(map => new Map(map.set(questionCount, text)))
    }
    
    // Logic flow for input questions/answers
    // Uses if statements to avoid contradicting questions
    useEffect(() => {

        // If you like shooter games, or you like adventure games, skip simulators
        if((userInput.get(3) == "YES" || userInput.get(4) == "YES") && questionCount == 5) jumpToQuestion(6);

        // If you like simulators, skip role playing games
        if(userInput.get(5) == "YES" && questionCount == 6) jumpToQuestion(7);
        
        // If you like adventure games, shooter games, or role playing games, skip simulator games
        if(userInput.get(5) == undefined && questionCount == 7) jumpToQuestion(8);

        // If you like shooter games, skip hack and slash games
        if(userInput.get(3) == "YES" && questionCount == 7) setEnd(true);

        // If you like RPG games, skip sports and racing games
        if(userInput.get(6) == "YES" && questionCount == 7) jumpToQuestion(9);
        
        // If you like sport games, racing games, or simulator games, skip hack and slash games and provide output
        if(userInput.get(7) != undefined && questionCount == 9) setEnd(true);
        
        // If you answer the last question in the question list, provide output
        if(userInput.get(9) != undefined && questionCount == 10) setEnd(true);
        
        updateScreen();
    }, [questionCount])

    // Makes API call to backend to process inputs
    const getOutput = async () => {
        const result = await axios.post(`http://${process.env.REACT_APP_API}/engine`, Object.fromEntries(userInput))
        setNewList(result.data);
    }


    // Once the question phase is over, send input data to backend
    useEffect(() => {
        if(end == true) getOutput();
    }, [end])
    
    // Engine buttons and Engine text are both made to be updated with the functions written above
    // Both buttons when clicked will trigger the next questions by calling the goToNextQuestion function
    return(
        <div className="Engine">
            <div className='EngineContainer'>
                <div className='EngineTitle'>
                    <h1 className="rainbow rainbow_text_animated">THE GAME GUESSER</h1>
                </div>
                <div className='EngineProcessing'>
                    <div className='EngineRobot'>
                        <img src={robot} className="EngineRobotImage"/>
                    </div>
                    {end != true ?
                        <div className='EngineTextBox'>
                            <div className='EngineText tri-right left-in'>
                                {question}
                            </div>
                            <div className='EngineButtons'>
                                <EngineButton text={leftText} onClick={() => goToNextQuestion(leftText)}/>
                                <EngineButton text={rightText} onClick={() => goToNextQuestion(rightText)}/>
                            </div>
                        </div> : 
                        <div className='EngineOutput'>
                            <h1 className='EngineOutputTitle'>Games tailored for you!</h1>
                            <ul className="EngineOutputGames">
                                {newList.map((game, index) => <Game name={game.name} imageUrl={game.cover} url={game.url} width="200px"/>)}
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Engine;