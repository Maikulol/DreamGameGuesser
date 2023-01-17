import '../styles/SearchBar.css'


function SearchBar(props){
    return (
        <input className='SearchBar' type='text' placeholder='Search Games Here' spellCheck="false" value={props.value} onChange={props.onChange}/>
    )
}

export default SearchBar;