import './App.css'
import { useState } from 'react'
import { AngryButton } from './components/AngryButton'
import { CounterButton } from './components/CounterButton'
import { LightSwitchButton } from './components/LightSwitchButton'
import { TextRepeaterButton } from './components/TextRepeaterButton'

export const App = () => {
  const [light, setLight] = useState(0);
  const dark = (light === 0) ? 'dark' : '';
  // (light === 0) && 'dark' || (light === 1) && ''

  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons</h1>

      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} setLight={setLight}/>
        <TextRepeaterButton />
      </section>
    </div>
  )
}

