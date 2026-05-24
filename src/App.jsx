import { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState('')
  const students = ['Kashish', 'Rahul', 'Ananya', 'Raj']
  const filteredStudents = students.filter((student) =>
  student.toLowerCase().includes(name.toLowerCase())
  )

  return (
    <div>
      <h1>React Input Example</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <h2>Welcome {name}</h2>}

      {filteredStudents.length > 0 ? (
        <ul>
          {filteredStudents.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      ) : (
        <p>No students found</p>
      )}

    </div>
  )
}

export default App