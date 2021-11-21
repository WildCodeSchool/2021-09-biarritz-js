import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ProverbsPage from "./components/ProverbsPage";
import SettingsPage from "./components/SettingsPage";
import {LanguagesContextProvider} from "./contexts/LanguagesContext";
import {ProverbsContextProvider} from "./contexts/ProverbsContext";

function App() {
  // TODO : instanciate the two contexts providers below
  return (
    <LanguagesContextProvider>
      <ProverbsContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={ProverbsPage} />
            <Route path="/settings" component={SettingsPage} />
          </Switch>
        </Router>
      </ProverbsContextProvider>
    </LanguagesContextProvider>
  );
}

export default App;
