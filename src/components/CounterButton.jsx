import { useState } from "react"

export const CounterButton = (props) => {
  const { increaseAnger } = props;

  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1)
    increaseAnger(0.1)
  }

  return (
    <button onClick={handleClick} className="CounterButton">
      You clicked me {clicks} amount of times
    </button>
  )
}