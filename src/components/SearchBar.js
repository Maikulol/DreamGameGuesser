import '../styles/SearchBar.css'

// Creating the search bar component used for the games page. More search bar processes in the Games.js file...
function SearchBar(props){
    return (
        <input className='SearchBar' type='text' placeholder='Search Games Here' spellCheck="false" value={props.value} onChange={props.onChange}/>
    )
}

export default SearchBar;