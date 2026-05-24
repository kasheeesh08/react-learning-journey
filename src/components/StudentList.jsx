import StudentCard from './StudentCard'
function StudentList({ students = [] }) {
  return (
    <ul>
      {students.map((student, index) => (
        <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
        />
      ))}
    </ul>
  )
}

export default StudentList