function CustomButton({ children, onClick }) {
  return (
    <button
      style={{ marginRight: '10px' }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CustomButton