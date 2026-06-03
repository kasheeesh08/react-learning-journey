# ⚛️ React Learning Journey

A personal repository documenting my journey of learning React from fundamentals to building real-world projects.

This repository contains practice exercises, mini-components, experiments, and core React concepts that helped me build larger applications.

---

## 🎯 Purpose

The goal of this repository is to:

- Learn React fundamentals
- Practice component-based architecture
- Understand state management
- Work with APIs
- Build reusable UI components
- Prepare for real-world React projects

---

## 📚 Topics Covered

### React Fundamentals

- Functional Components
- JSX
- Props
- Children Props
- Component Composition

### State Management

- useState
- State Updates
- Derived State

### Side Effects

- useEffect
- Dependency Arrays
- Cleanup Functions

### Forms & Inputs

- Controlled Components
- Input Handling
- Form Submission
- Validation

### Rendering

- Conditional Rendering
- List Rendering
- Dynamic Styling

### Component Communication

- Parent to Child Props
- Child to Parent Communication
- Lifting State Up
- Function Props

### API Integration

- Fetch API
- Async Data Loading
- Loading States
- Error Handling

### Reusability

- CustomButton Component
- CustomInput Component
- StudentCard Component
- StudentList Component

---

## 🛠️ Technologies Used

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3

---

## 📂 Repository Structure

```txt
src
│
├── components
│   ├── CustomButton.jsx
│   ├── CustomInput.jsx
│   ├── StudentCard.jsx
│   ├── StudentList.jsx
│   └── Message.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧠 Concepts Learned

### State Management

```jsx
const [count, setCount] = useState(0)
```

### Effects

```jsx
useEffect(() => {
  console.log("Component Mounted")
}, [])
```

### Conditional Rendering

```jsx
{loading ? <p>Loading...</p> : <Content />}
```

### List Rendering

```jsx
students.map(student => (
  <StudentCard key={student.id} />
))
```

### Lifting State Up

```jsx
Parent
 ↓
Child
 ↓
Update Parent State
```

---

## 🚀 Key Takeaways

- Built reusable React components
- Understood React data flow
- Practiced state management
- Integrated external APIs
- Learned component communication patterns
- Developed project-ready React fundamentals

---

## 🔜 Next Steps

After completing this learning repository, I built:

### 🎬 React Movie Discovery Platform

A full React application featuring:

- TMDB API Integration
- Appwrite Integration
- Trending Searches
- Watchlist Functionality
- Movie Details Modal
- Vercel Deployment

---

## 👨‍💻 Author

Kashish

GitHub:
https://github.com/kasheeesh08
