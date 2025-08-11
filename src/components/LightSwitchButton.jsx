export const LightSwitchButton = (props) => {
  // const [light, setLight] = useState(0);
  const {light, switchLight } = props;
  
  return (
    <button onClick={switchLight} className="LightSwitchButton">
    {light === 1 && <span><i>💡</i> I&#39;m on!</span>}
    {light === 0 && <span className="off"><i>💡</i> I&#39;m off!</span>}
    </button>
  )
}