import { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState('')
  const students = ['Kashish', 'Rahul', 'Ananya', 'Raj']
  return (
    <div>
      <h1>React Input Example</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

    </div>
  )
}

export default App