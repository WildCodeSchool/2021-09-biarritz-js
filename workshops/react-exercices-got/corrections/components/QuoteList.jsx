import Quote from './Quote';

const QuoteList = ({name, quoteList}) => {

    return (
        <>
            <h2>{name}</h2>
            <ul>
                {quoteList.map((quote) => 
                    <Quote key={quote} citation={quote}/>
                )}
            </ul>
        </>
    )
}

export default QuoteList;