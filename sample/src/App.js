import {useState} from 'react'
function App() {
  const [count,setCount] = useState(0)
  const addCount = () => {
    setCount(count+1) 
  } 
  const minusCount = () => {
    setCount(count-1)
  }
  return (
    <div> 
    <button onClick={addCount}>ADD</button>
    <br></br>
      <br></br>
    <button onClick={minusCount}>minus</button>
      <h1>Counter: {count}</h1>
      <h1>Counter: {count}</h1>
      <h1>Counter: {count}</h1>
      <h1>vichu</h1>
      <h2>hello</h2>
      <button >heloo</button>
      <h4>
        skdjflk
      </h4>
    </div>
  );
}

export default App;
