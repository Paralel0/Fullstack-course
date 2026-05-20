import './App.css'
import Course from './components/Course_list'
import course from './components/Course_parts'

const TotalHalf = ({ course }) => {
  const total = course[0].parts.reduce((sum, part) => sum + part.exercises, 0)
  console.log("total:", total)
  return <p>Half Stack application development exercises: {total}</p>
}

const TotalNode = ({course}) => {
  const total = course[1].parts.reduce((sum, parts) => sum + parts.exercises, 0)
  console.log("total:", total)
  return <p>Node.js exercises: {total}</p>
}

const App = () => {
    return (
      <div>
        {course.map(course => <Course key={course.id} course={course} />)}
        <TotalHalf course={course} />
        <TotalNode course={course} />
      </div>
    )
  }

export default App