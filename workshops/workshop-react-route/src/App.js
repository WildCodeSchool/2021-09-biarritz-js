import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import CssDefinition from './components/CssDefinition';
import HtmlDefinition from './components/HtmlDefinition';
import JsDefinition from './components/JsDefinition';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />

      
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cssdefinition' component={CssDefinition} />
          <Route path='/htmldefinition' component={HtmlDefinition} />
          <Route path='/jsdefinition' component={JsDefinition} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
