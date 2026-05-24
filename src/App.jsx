import { useState, useEffect } from 'react'
import StudentList from './components/StudentList'
import CustomButton from './components/CustomButton'
import CustomInput from './components/CustomInput'

function App() {
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const students = [
    { id: 1, name: 'Kashish', course: 'React' },
    { id: 2, name: 'Rahul', course: 'Node.js' },
    { id: 3, name: 'Ananya', course: 'AI' },
  ]
  const filteredStudents = students.filter((student) =>
  student.name.toLowerCase().includes(name.toLowerCase())
  )
  const [count, setCount] = useState(0)
  const [selectedStudent, setSelectedStudent] = useState('')

  function clearInput() {
    setName('')
  }
  

  useEffect(() => {
    console.log('Button count updated')
  }, [count])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
  }, 2000)

    return () => clearTimeout(timer)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (name === '') {
      alert('Please enter a name')
      return
  }

    alert(`Submitted Name: ${name}`)
    setName('')
  }

  if (loading) {
        return <h1>Loading...</h1>
  }

  const isInputEmpty = name.trim() === ''
  
  return (
    <div>
      <h1>React Input Example</h1>
      <form onSubmit={handleSubmit}>

      <CustomInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <br />
      
      <CustomButton 
      onClick={handleSubmit}
      disabled={isInputEmpty}>
        Submit
      </CustomButton>
      </form>

      <CustomButton onClick={clearInput}>
        Clear Input
      </CustomButton>
      
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
      {name === '' && <p>Showing all students</p>}

      <p>
        Found {filteredStudents.length} students
      </p>

      {selectedStudent && (
        <h3>Selected Student: {selectedStudent}</h3>
      )}

      <StudentList
        students={filteredStudents}
        setSelectedStudent={setSelectedStudent}
        selectedStudent={selectedStudent}
      />

    </div>
  )
}

export default App