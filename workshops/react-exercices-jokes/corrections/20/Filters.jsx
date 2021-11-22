import './filters.css';

const Filters = ({withDelivery, setWithDelivery, numberJokes, setNumberJokes, containsWord, setContainsWord}) => {
    return (
      <div className="filtres">
          <div className="filtre__input">
            <label className="filtre__label" htmlFor="numberJokes">Nombre de blagues :</label>
            <input className="filtre__input__text--small" type="number" value={numberJokes} id="numberJokes" onChange={(e)=>setNumberJokes(e.target.value)}/>
          </div>
          <div className="filtre__input">
            <label className="filtre__label" htmlFor="withDelivery">Avec chute : </label>
            <input type="checkbox" checked={withDelivery} id="withDelivery" onChange={(e)=>setWithDelivery(e.target.checked)}/>
          </div>
          <div className="filtre__input">
            <label className="filtre__label" htmlFor="containsWord">Contient :</label>
            <input className="filtre__input__text--large" type="text" value={containsWord} id="containsWord" onChange={(e)=>setContainsWord(e.target.value)}/>
          </div>
      </div>
    )
}

export default Filters;