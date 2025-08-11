export const LightSwitchButton = (props) => {
  // const [light, setLight] = useState(0);
  const {light, setLight} = props;

  const handleClick = () => light === 0 && setLight(1) || light === 1 && setLight(0)
                            // setLight(light === "1" ? "0" : "1");
  
  return (
    <button onClick={handleClick} className="LightSwitchButton">
    {light === 1 && <span><i>💡</i> I&#39;m on!</span>}
    {light === 0 && <span className="off"><i>💡</i> I&#39;m off!</span>}
    </button>
  )
}