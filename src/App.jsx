
import { useState } from 'react';
import './App.css'
import Button from './components/Button/Button.jsx'
import Display from './components/Display/Display.jsx';

function App() {

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Hello World</h1>
      <Button type="button" disabled={false} onClick={handleClick} >
        クリック！
      </Button>
      <Display count={count} />
    </>
  )
}

export default App
