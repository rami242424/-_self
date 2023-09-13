function App() {
  return (
    <div className="App">
      <Hello name='Licat' />
    </div>
  );
}

function Hello({name}) {

    const num = [1, 2, 3, 4, 5]

    // const numComponentList = num.map(i => <p key={i}>안녕, {name} {i}호</p>)
    return (
      // 1
      // <div>
      //   {/* {numComponentList} */}
      //   {num.map(i => <p key={i}>안녕, {name} {i}호</p>)}
      // </div>

      // 2
      <div>
        {/* {numComponentList} */}
        {num.map(i => <p key={i}>안녕, {name} {i}호</p>)}
        <div>
        {/* {numComponentList} */}
        {num.map(i => <p key={i}>안녕, {name} {i}호</p>)}
      </div>
      </div>

      // 3
      // <div>
      //   {num.map(i => <p key={i}>안녕, {name} {i}호</p>)}
      //   {num.map(i => <p key={i}>안녕, {name} {i}호</p>)}
      // </div>
    )
}
export default App;