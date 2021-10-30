import './joke.css';

const Joke = ({blague, chute}) => {
    return(
        <div className="joke">
            <div className="joke__blague">{blague}</div>
            <div className="joke__chute">{chute}</div>
        </div>
    )
}

export default Joke;