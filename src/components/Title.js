import '../styles/Title.css';
import { Link } from 'react-router-dom';

function Title(){
    return (
        <Link to={"/"} className='Title'>
            <div className="DGG">
                <h1>DreamGameGuesser</h1>
            </div>
            <div className="Author">
                <h4>By Michael Papadopoulos</h4>
            </div>
        </Link>
    )
}

export default Title;