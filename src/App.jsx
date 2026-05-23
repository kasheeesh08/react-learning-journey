import Message from './components/Message'
import Profile from './components/Profile'

function App() {
  return (
    <div>
      <h1>Hello Kashish this side</h1>

      <Message />
      <Profile name="Raj" branch="CSE" />
      <Profile name="Ananya" branch="AI" />
    </div>
  )
}

export default App