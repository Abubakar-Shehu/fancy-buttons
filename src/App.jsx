import './App.css'
import { useState, useReducer } from 'react'
import { AngryButton } from './components/AngryButton'
import { CounterButton } from './components/CounterButton'
import { LightSwitchButton } from './components/LightSwitchButton'
import { TextRepeaterButton } from './components/TextRepeaterButton'

export const App = () => {
  const [angryApp, dispatch] = useReducer((angryApp, amount) => {
    if (angryApp < 1) {
      return angryApp + amount;
    } else {
      return 0;
    }
  }, 0);

  // const increaseAnger = (amount) => {
  //   if (angryApp < 1) {
  //     setAngryApp(angryApp + amount);
  //   } else {
  //     setAngryApp(0);
  //   }
  // }

  const [light, setLight] = useState(0);
  const switchLight = () => {
    light === 0 && setLight(1) || light === 1 && setLight(0)
    // setLight(light === "1" ? "0" : "1");
    dispatch(0.1)
  }                   
  const dark = (light === 0) ? 'dark' : '';
            // (light === 0) && 'dark' || (light === 1) && ''

  return (
    <div className={`App ${dark}`}>
      <h1>{angryApp < 1 ? "Fancy Buttons!" : "YOU'RE CLICKING TOO MANY BUTTONS!"}</h1>
      <section>
        <AngryButton increaseAnger={dispatch}/>
        <CounterButton increaseAnger={dispatch}/>
        <LightSwitchButton light={light} switchLight={switchLight} />
        <TextRepeaterButton increaseAnger={dispatch}/>
      </section>
    </div>
  )
}

