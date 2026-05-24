function StudentCard({ name, course, setSelectedStudent,selectedStudent }) {
  return (
    <li
        onClick={() => setSelectedStudent(name)}
        style={{
            backgroundColor:selectedStudent === name ? '#1e293b' : 'transparent',
            border: '1px solid white',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '8px',
            listStyle: 'none'
        }}
    >
      {name} - {course}
    </li>
  )
}

export default StudentCard