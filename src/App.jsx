
import { useState } from 'react';
import './App.css'
import Button from './components/Button/Button.jsx'

function App() {

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Hello World</h1>
      <Button type="button" disabled={false} onClick={handleClick} >
        カウント：{count}
      </Button>
    </>
  )
}

export default App
