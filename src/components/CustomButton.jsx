function CustomButton({ children, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      style={{ marginRight: '10px' }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default CustomButton