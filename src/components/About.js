import '../styles/About.css';

function About(){
    return (
        <div className="About">
            <div className="TextContainer">
                <div className="AboutTitle">
                    <h1>About The Project</h1>
                </div>
                <div className="Paragraph">
                    <h5 className='AboutHeaders'>What is the purpose of this site?</h5>
                    <h6 className='ParagraphText'>The purpose of 
                    this site is to collect user preferences 
                    related to video games, and then use those 
                    preferences to recommend a game or a list of games.</h6>
                    <h5 className='AboutHeaders'>How to use the site:</h5>
                    <h6 className='ParagraphText'>This site is designed 
                    in a minimalistic fashion, with as little clutter as 
                    possible. I personally believe that in most cases, 
                    more is less, so that was my aim while designing the look and 
                    layout of this project. The home page is always 
                    accessible with a click of the DreamGameGuesser 
                    logo in the top left corner of the screen. 
                    The home page has 3 portals that will take you to 
                    different parts of the site. The section you seemed
                     to have already figured out, the games section 
                     that displays the pool of games that the site 
                     can draw from, and the engine section that is the main course.</h6>
                    <h5 className='AboutHeaders'>The Engine:</h5>
                    <h6 className='ParagraphText'>While on the engine page you will 
                    be asked to input your preferences on the type of video
                     game that you most enjoy. After finishing the input 
                     section, the website will automatically take those 
                     inputs into consideration and recommend you a game or 
                     a list of games.</h6>
                    <h5 className='AboutHeaders'>About the creator:</h5>
                    <h6 className='ParagraphText'>My name is Mike, and I am 
                    the creator of this site. This project has been a goal of
                     mine for over 2 years now, ever since its first iteration
                      that I designed in grade 10. Since then, my coding knowledge
                       has advanced exponentially, and my ideas have grown 
                       with it. I hope this creation offers some entertainment 
                       for you. Remember to enjoy it!
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default About;