import '../styles/Engine.css'
import robot from '../assets/enginerobot.gif'
import { useState } from 'react'
import EngineButton from './EngineButton';
import { useEffect } from 'react';
import Game from './Game';

// The entire engine page
function Engine(){

    // Set of questions to show the user
    const questionSet = new Map([
        [1, "How strict do you want the engine to be?"],
        [2, "What type of game do you prefer?"],
        [3, "Do you like shooter games?"],
        [4, "Do you like adventure games?"],
        [5, "Are you interested in sports games or racing games?"],
        [6, "Are you a role player?"],
        [7, "Do you enjoy simulators?"],
        [8, "Do you like Hack and Slash games?"]
    ])
    
    // Set of answers for first button
    const answerSet1 = new Map([
        [1, "STRICT"],
        [2, "SINGLEPLAYER"],
        [3, "YES"],
        [4, "YES"],
        [5, "SPORT"],
        [6, "YES"],
        [7, "YES"],
        [8, "YES"]
    ])

    // Set of answers for second button
    const answerSet2 = new Map([
        [1, "LENIENT"],
        [2, "MULTIPLAYER"],
        [3, "NO"],
        [4, "NO"],
        [5, "RACING"],
        [6, "NO"],
        [7, "NO"],
        [8, "NO"]
    ])
    
    // useState is used to update the onscreen text such as the question being asked and the text on the buttons
    const [questionCount, setQuestionCount] = useState(1);
    const [userInput, setUserInput] = useState(new Map());
    const [question, setQuestion] = useState(questionSet.get(questionCount));
    const [leftText, setLeftText] = useState(answerSet1.get(questionCount));
    const [rightText, setRightText] = useState(answerSet2.get(questionCount));

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

    // Updates the recored user input
    const updateUserInput = (text) => {
        setUserInput(map => new Map(map.set(questionCount, text)))
    }

    // Function used exclusively for skipping certain questions that may be irrelevant
    const jumpToQuestion = (number) => {
        setQuestionCount(number)
    }

    useEffect(() => {
        updateScreen();
    }, [questionCount])

    const NewFilteredList = [
        {
            name: "COCK",
            url: "https://twitter.com/home?lang=en",
            cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4ymo.png"
        },{
            name: "COCK",
            url: "https://twitter.com/home?lang=en",
            cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4ymo.png"
        },{
            name: "COCK",
            url: "https://twitter.com/home?lang=en",
            cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4ymo.png"
        },{
            name: "COCK",
            url: "https://twitter.com/home?lang=en",
            cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4ymo.png"
        }
    ]

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
                    {/* <div className='EngineTextBox'>
                        <div className='EngineText tri-right left-in'>
                            {question}
                        </div>
                        <div className='EngineButtons'>
                            <EngineButton text={leftText} onClick={() => goToNextQuestion(leftText)}/>
                            <EngineButton text={rightText} onClick={() => goToNextQuestion(rightText)}/>
                        </div>
                    </div> */}
                    <div className='EngineOutput'>
                        <h1 className='EngineOutputTitle'>Games tailored for you</h1>
                        <ul className="EngineOutputGames">
                            {NewFilteredList.map((game, index) => <Game name={game.name} imageUrl={game.cover} url={game.url} width="200px"/>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Engine;