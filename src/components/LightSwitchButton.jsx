export const TextRepeaterButton = () => {
  return (
    <button className="LightSwitchButton">
    {/* When the state is on */}<span><i>💡</i> I&#39;m on!</span>
    {/* When the state is off */}<span className="off"><i>💡</i> I&#39;m off!</span>
    </button>
  )
}