
import './App.css'
import Button from './components/Button/Button.jsx'

function App() {
  
  const handleClick = () => {
    console.log('Button clicked')
  }

  return (
    <>
      <h1>Hello World</h1>
      <Button type="button" disabled={false} onClick={handleClick}>
        <span>ボタン</span>
      </Button>
    </>
  )
}

export default App
