import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Home />

      <BrowserRouter>
        <Switch>

          <Route exact path="/" component="home"></Route>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
