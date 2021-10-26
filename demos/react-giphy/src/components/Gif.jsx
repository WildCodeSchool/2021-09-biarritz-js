
const Gif = ({url, theme, selectGif}) => {
    
    return(
        <img height="200" width="200" src={url} alt={theme} onClick={() => selectGif(url)}/>
    )
}

export default Gif;