import '../styles/Home.css'
import Button from './Button';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <div className='Buttons'>
        <Link to="/engine" className='ButtonLink'>
          <Button text="Engine"/>
        </Link>
        <Link to="/games" className='ButtonLink'>
          <Button text="Games"/>
        </Link>
        <Link to="/about" className='ButtonLink'>
          <Button text="About"/>
        </Link>
      </div>
    </div>
  );
}

export default Home;
