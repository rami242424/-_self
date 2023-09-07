// import logo from './logo.svg';
import './App.css';

function App() {

    //선생님답안
    import './App.css';

    function App() {

      const time = new Date();
      const year = time.getFullYear();
      const month = time.getMonth();
      const date = time.getDate();
      const hour = time.getHours();
      const min = time.getMinutes();
      const sec = time.getSeconds();

      return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
          <h1 style={{ color: 'red' }}>년 : {year}</h1>
          <h2>월/일 : {month + 1}/{date}</h2>
          <h3>시간 : {hour}시 {min}분 {sec}초</h3>
        </div>
      );
    }


    // --------------------------------------------------------------
    //노션 답안
    // import './app.css';

    // function App() {
    //   const name = '라이캣!';
    //   const someStyle = {backgroundColor:"black", color:"white"};
    //   const today = new Date();
    //   const year = today.getFullYear();
    //   const month = today.getMonth()+1;
    //   const date = today.getDate();
    //   const hour = today.getHours();
    //   const min = today.getMinutes();
    //   const sec = today.getSeconds();

    //   return (
    //     <div>
    //       <div>
    //         <h1 style={someStyle}>안녕, {name} 1호</h1>
    //         <h1>안녕, 라이캣 2호!</h1>
    //         <div className="newClass"/>
    //       </div>
    //       <div style={{backgroundColor:"black", color:"white"}}>
    //         <h1 style={{color:'red'}}>년 : {year}</h1>
    //         <h1>월/일 : {month}/{date}</h1>
    //         <h1>시간 : {hour}시 {min}분 {sec}초</h1>
    //       </div>
    //     </div>
    //   );
    // }


    // --------------------------------------------------------------
    // 내가 한 엉망 코드
    // const Year = today.getFullYear();
    // const MonthDay = today.getMonth();
    // const Time = today.getTime();
    // <div>
    //   <h1 className='newClass'>년 : {Year} </h1>
    //   <h1>월/일 : {MonthDay} </h1>
    //   <h1>시간 : {Time} </h1>
        
    // </div>

    // function App() {
    //   const name = '라이켓';
    //   function 함수() {
    //     return '함수';
    //   }
    //   const someStyle = { backgroundColor: "yellow", color: "white" };
    // ------------------------------------------------------------ ------
    //   return (
    //     <div>
    //       <h1 className="h1">안녕 {함수() ? '함수' : 'JSX'}!</h1>
    //       <h1 className='newClass'>안녕 라이켓!</h1>
    //       <input type="text" style={{ backgroundColor: "red" }} />
    //     </div>
    //   );
    // }
    
    // export default App;
  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
