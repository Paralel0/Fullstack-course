import { useState } from 'react'
import './App.css'

const Average = (props: { good: number; neutral: number; bad: number }) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  console.log("Average reviews:", average)
  return (
    <tr>
      <td>Average</td>
      <td>{average}</td>
    </tr>
  )
}

const Positive = (props: { good: number; neutral: number; bad: number }) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad
  const positive = total === 0 ? 0 : (good / total) * 100
  console.log("Positive percentage:", positive)
  return (
    <tr>
      <td>Positive</td>
      <td>{positive} %</td>
    </tr>
  )
}

const StatisticsLine = (props: { text: string; value: number }) => {
  const { text, value } = props
  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}

const Statistics = (props: { good: number; neutral: number; bad: number }) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad
  if (total === 0) {
    return (<p>No feedback given</p>)
  }
  return (
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="All" value={total} />
          <Average good={good} neutral={neutral} bad={bad} />
          <Positive good={good} neutral={neutral} bad={bad} />
        </tbody>
      </table>
  )
}

  
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
