import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from './firebaseApp'
import { Todos } from './components/todos'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
        <h1>ToDoList</h1>
        <Todos />
      </div>
  )
}

export default App
