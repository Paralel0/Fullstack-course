const Course = ({ course }) => {
  return (
  <div>
    <h1>{course.name}</h1>
     {course.map (course => (
        <Course key={course.id} course={course} />
      ))}
  </div>
  )
} 

export default Course