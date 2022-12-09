import Header from './components/Header'
function App() {
  const data = 'Vishnu V.S'
  return (
    <div> 
      <Header data={data} />
      <h1 style={{color:'red'}}>heooe world</h1>
    <p>This is discription {data}</p>
    
      <Hello/>
      <Hello />
      <Hello />
    </div>
  );
}

export default App;

function Hello(){
  return <h1  style={{ backgroundColor:'red'}}>hello world</h1>
}