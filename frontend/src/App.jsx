import { useState } from "react"

function App() {


  return (
    <>
      <Inputfield/>
      <Filtertodo/>
      <TodoList/>
    </>
  )
}

let globalCount = 0

function Inputfield() {
  const [title, settitle] = useState('')

  function handleClick() {

  }
  return(
    <>
      <input type="text" placeholder="activity"  value={title}  onChange={(e) => {
        settitle(e.target.value)
      }}/>
      <button onClick={handleClick}>Add</button>
    </>
  )
}

function Filtertodo() {
  const [filtername, setfilter] = useState('')
  return(
    <>
      <input type="text" placeholder="filter" value={filtername} onChange={(e) => setfilter(e.target.value)}/>
    </>
  )
}

function TodoList() {
  const [todos, settodos] = useState([]);
  return(
    <>
    <div>

    </div>

    </>
  )
}

function getId() {
  return globalCount++
}

export default App
