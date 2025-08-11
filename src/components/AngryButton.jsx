export const AngryButton = () => {
  return (
    <button className="AngryButton">
    {/* When the threshold is not reached */}<span>Don&#39;t click me too much! </span>
    {/* When the threshold is reached */}<span>Rawr!</span>
    </button>
  )
}