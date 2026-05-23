function Profile({ name, branch }) {
  return (
    <div
        style={{
            border: '2px solid white',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '10px',
        }}
    >
      <h2>Profile Component</h2>

      <p>Name: {name}</p>
      <p>Branch: {branch}</p>
    </div>
  )
}

export default Profile