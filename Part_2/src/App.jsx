import './App.css'
import Course from './components/Course'

const Total = ({ course }) => {
  const total = course.parts.reduce((sum, parts) => sum + parts.exercises, 0)
  console.log("total:", total)
  return <p>Total number of exercises: {total}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return (
    <div>
      <Course course={course} />
      <Total course={course} />
    </div>
  )
}

export default App