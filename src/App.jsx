import { useState, useEffect } from 'react'
import StudentList from './components/StudentList'
import CustomButton from './components/CustomButton'

function App() {
  const [name, setName] = useState('')
  const students = [
    { id: 1, name: 'Kashish', course: 'React' },
    { id: 2, name: 'Rahul', course: 'Node.js' },
    { id: 3, name: 'Ananya', course: 'AI' },
  ]
  const filteredStudents = students.filter((student) =>
  student.name.toLowerCase().includes(name.toLowerCase())
  )
  function clearInput() {
    setName('')
  }
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('Button count updated')
  }, [count])
  function handleSubmit() {
    if (name === '') {
      alert('Please enter a name')
      return
  }

    alert(`Submitted Name: ${name}`)
  }

  return (
    <div>
      <h1>React Input Example</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      
      <CustomButton onClick={handleSubmit}>
        Submit
      </CustomButton>

      <br />

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

      <StudentList students={filteredStudents} />

    </div>
  )
}

export default App