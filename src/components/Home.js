import '../styles/Home.css'
import Button from './Button';

function Home() {
  return (
    <div className="Home">
      <div className='Buttons'>
        <Button text="Engine"/>
        <Button text="Games"/>
        <Button text="About"/>
      </div>
    </div>
  );
}

export default Home;
