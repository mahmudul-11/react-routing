import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage/HomePage';
import Friends from './components/Friends/Friends';
import Contact from './components/Contact/Contact';
import About from './components/Homepage/About/About';
import NotFound from './components/NoteFound/NotFound';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch >
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>
          <Route path='/home'>
            <HomePage></HomePage>
          </Route>
          <Route path='/friends'>
            <Friends></Friends>

          </Route>
          <Route path='/contact'>
            <Contact></Contact>

          </Route>

          <Route >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
