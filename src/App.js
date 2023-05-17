import { useState } from 'react';
import Home from './components/home/home';
import NavBar from './components/nav-bar/nav';
import NavLinks from './components/nav-bar/nav-links';
import './style/app.css';

function App() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="app">
      <NavBar isClicked={isClicked} setIsClicked={setIsClicked} />
      <NavLinks />
      <Home isClicked={isClicked} setIsClicked={setIsClicked}/>
    </div>
  );
}

export default App;
