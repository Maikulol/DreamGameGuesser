import '../styles/Home.css'
import Button from './Button';
import { Link } from 'react-router-dom'


// The home page of the website. This homepage hosts 3 links that will route you to different areas of the website.
// Using Link, we assign buttons to a specified url.
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
