import '../styles/Engine.css'

function Engine(){
    return(
        <div className="Engine">
            <div className='EngineContainer'>
                <div className='EngineTitle'>
                    <h1>THE GAME GUESSER</h1>
                </div>
                <div className='EngineInput'>
                    <div className='EngineInputTitle'>
                        <h2>What are your video game preferences?</h2>
                    </div>
                    <div className='InputButtons'>
                        Adventure?
                    </div>
                    <div className='InputButtons'>
                        Shooter?
                    </div>
                    <div className='InputButtons'>
                        Fighting?
                    </div>
                    <div className='InputButtons'>
                        Sport?
                    </div>
                    <div className='InputButtons'>
                        Simulator?
                    </div>
                </div>
                <div className='EngineOutput'>
                    <div className='EngineOutputTitle'>
                        <h2>Based on your preferences, 
                        we recommend that you check out this game/list of games.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Engine;