import '../styles/Error.css'

function Error(){
    return(
        <div className='Error'>
            <div className="ErrorContainer">
                <div className='ErrorMessage'>
                    <h1>404 ERROR</h1>
                </div>
                <div className='ErrorExplanation'>
                    THIS PAGE DOES NOT EXIST
                </div>
            </div>
        </div>
    )
}

export default Error;