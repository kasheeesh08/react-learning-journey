import { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState('')
  const students = ['Kashish', 'Rahul', 'Ananya', 'Raj']
  const filteredStudents = students.filter((student) =>
  student.toLowerCase().includes(name.toLowerCase())
  )
  function clearInput() {
    setName('')
  }
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('Button count updated')
  }, [count])

  return (
    <div>
      <h1>React Input Example</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <button onClick={clearInput}>
        Clear Input
      </button>
      
      <br />
      <button onClick={() => setCount(count + 1)}>
        {count >= 5 ? 'High Count' : 'Increase Count'}
      </button>

    <br />

      <button
      disabled={count === 0}
      onClick={() => setCount(count - 1)}>
        Decrease Count
      </button>

      <br />

      <p style={{
          color: count > 5 ? 'red' : 'lightgreen'
        }}>
        Button clicked {count} times
      </p>

      <br />

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