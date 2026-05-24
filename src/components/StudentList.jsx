import StudentCard from './StudentCard'
function StudentList({students = [],setSelectedStudent, selectedStudent }) {
  return (
    <ul>
      {students.map((student, index) => (
        <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            setSelectedStudent={setSelectedStudent}
            selectedStudent={selectedStudent}
        />
      ))}
    </ul>
  )
}

export default StudentList