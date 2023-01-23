import '../styles/Engine.css'
import robot from '../assets/enginerobot.gif'

function Engine(){
    return(
        <div className="Engine">
            <div className='EngineContainer'>
                <div className='EngineTitle'>
                    <h1>THE GAME GUESSER</h1>
                </div>
                <div className='EngineProcessing'>
                    <div className='EngineRobot'>
                        <img src={robot} className="EngineRobotImage"/>
                    </div>
                    <div className='EngineTextBox'>
                        <h1 className='EngineText'>
                            This is test text
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Engine;