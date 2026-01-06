import { useState } from 'react'
import './App.css'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  console.log("Reviews on good:", good)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  console.log("Reviews on neutral:", neutral)
  const handleBadClick = () => setBad(bad + 1)
  console.log("Reviews on bad:", bad)

  return (
    <div className='Feedback-css'>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )
}

export default App
