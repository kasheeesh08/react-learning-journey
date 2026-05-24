function StudentCard({ name, course }) {
  return (
    <li
        style={{
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