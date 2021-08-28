import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';

function App() {
  return (
    <>
    <header className='main-header'>
      <h1><Link to='/'>Portfolio</Link></h1>
      {/* URL 앞에 / 빼지 마시오 -> /URL */}
      <nav className='gnb'>
        <ul>
          <li><Link to='/'>home</Link></li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
              <ul className='depth2'>
                <li><Link to='/portfolio/mobile'>mobile</Link></li>
                <li><Link to='/portfolio/pc'>pc</Link></li>
              </ul>
          </li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    </header>

    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/portfolio/:pagename'>
          <Portfolio />
        </Route>
        <Route path='/about' component={About} />
      </Switch>
    </div>
    </>
  );
}

export default App;
