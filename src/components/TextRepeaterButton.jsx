import { useState } from "react"

export const TextRepeaterButton = (props) => {
  const [repeat, setRepeat] = useState(1);
  const repeatedWord = [];

  for (let i = 0; i < repeat; i++ ) {
    repeatedWord.push(<span key={i}>I like this text</span>);
  }
  
  const handleClick = () => setRepeat(repeat + 1)

  return (
    <button onClick={handleClick} className="TextRepeaterButton">
      {repeatedWord}
    </button>
  )
}