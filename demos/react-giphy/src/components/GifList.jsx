import Gif from './Gif';

const GifList = (props) => {

    return(
        <div className="list">
            {props.gifList.map((gif, key) => <Gif key={key} theme={props.theme} url={gif.images.downsized_medium.url} selectGif={(url)=>props.selectGif(url)}/>)}
        </div>
    )
}

export default GifList;