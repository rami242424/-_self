function App() {
  function handleClickEvent(){
    console.log('click')
  }
  return (
    <div className="App">
      <h1 onClick={handleClickEvent}>안녕다시</h1>
    </div>
  );
}

export default App;


