import './App.css'
import Course from './components/Course'

const Total = ({ course }) => {
  const total = course[0].parts.reduce((sum, part) => sum + part.exercises, 0)
  console.log("total:", total)
  return <p>Half Stack application development exercises: {total}</p>
}

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
    return (
      <div>
        <Course course={course} />
        <Total course={course} />
      </div>
    )
  }

export default App