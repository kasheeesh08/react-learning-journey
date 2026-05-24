import { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState('')

  return (
    <div>
      <h1>React Input Example</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>
    </div>
  )
}

export default App