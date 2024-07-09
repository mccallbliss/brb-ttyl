import { useState } from 'react'
import phoneLogo from './assets/brb-phone.png'
import './App.css'
import Navigation from './Navigation';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <div className="main">
        <a href="https://react.dev" target="_blank">
          <img src={phoneLogo} className="logo brb ttyl" alt="brb ttyl logo" />
        </a>
        <h1>remember when the internet was fun?</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
