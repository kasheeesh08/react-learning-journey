import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button
      style={{ marginRight: '10px' }} 
      onClick={() => setCount(count + 1)}>
        Increase Count 
      </button>

      <br /><br />

      <button
      style={{ marginRight: '10px' }} 
      onClick={() => setCount(count - 1)}>
        Decrease Count
      </button>
    </div>
  )
}

export default App