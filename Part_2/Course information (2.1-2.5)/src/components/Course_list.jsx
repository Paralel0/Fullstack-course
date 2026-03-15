const Course = ({ course }) => {
  return (
  <div>
    <h1>{course.name}</h1>
      {course.parts.map(part => 
        <li key={part.id}>{part.name} {part.exercises}</li>
      )} 
  </div>
  )
} 

export default Course