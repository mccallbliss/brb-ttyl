import phoneLogo from './assets/brb-phone.png'
import myspacePlayer from './assets/brb-ttyl-myspace-player.png'
import './App.css'
import Navigation from './Navigation';

function App() {
  return (
    <>
      <Navigation />
      <div className="main">
        <a href="https://react.dev" target="_blank">
          <img src={phoneLogo} className="logo" alt="brb ttyl logo" />
        </a>
        <h1>remember when the internet was fun?</h1>
        <div>
          <img src={myspacePlayer} className="myspace-player" alt="Now Playing 'brb ttyl by davvn'" />
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default App
