import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
      console.log('Count changed')
  }, [count])

  return (
    <div>
      <h1>Counter App</h1>

      <h2>{count}</h2>
      <p>Current count is :{count}</p>
      <br /><br />

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

      <br /><br />
      <button onClick={() => setCount(0)}>
        Reset Count
      </button>

    </div>
  )
}

export default App