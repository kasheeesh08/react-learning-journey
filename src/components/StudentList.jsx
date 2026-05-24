function StudentList({ students = [] }) {
  return (
    <ul>
      {students.map((student, index) => (
        <li key={student.id}>
            {student.name} - {student.course}
        </li>
      ))}
    </ul>
  )
}

export default StudentList