import { useState } from "react"

export const AngryButton = (props) => {
  const { increaseAnger } = props;

  const [anger, setAnger] = useState(0);

  const handleClick = (amount) => {
    if (anger < 1) {
      setAnger(anger + amount)
    } else {
      setAnger(0)
    }
    increaseAnger(amount);
  };

  return (
    <button onClick={() => handleClick(0.1)} style={{ backgroundColor: `rgba(255,0,0,${anger})` }} className="AngryButton">
    {anger < 1 && <span>Don&#39;t click me too much! </span>}
    {anger > 1 && <span>Rawr!</span>}
    </button>
  )
}