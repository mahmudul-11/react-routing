import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage/HomePage';
import Friends from './components/Friends/Friends';
import Contact from './components/Contact/Contact';
import About from './components/Homepage/About/About';
import NotFound from './components/NoteFound/NotFound';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar> {/* eita hocche navbar gola...eta 
      obossoi BrowserRouter er vitore likte hobe noyto kaj korbe na. */}
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
          <Route path='/about'>
            <About></About>

          </Route>
          <Route path='/contact'>
            <Contact></Contact>

          </Route>

          <Route >{/* <Route path='*'></Route> */}
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
