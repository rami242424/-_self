* 좋아요 눌렀다 없얘는 기능
**  like % 2 === 1 홀수일때 참

import {useState} from 'react'

function Resume() {
  const [like, setLike] = useState(0);
  let heart = like % 2 === 1 ? '❤️' : ''

  function clickLike() {
      setLike(like + 1)
      console.log(like)
  }


  return(
      <div style={{border: 'black 2px solid'}}>
          <h1>자기소개서</h1>
          <h2>Hello</h2>
          <h3>취미 : 숨쉬기</h3>
          <h3>좋아하는 음식 : 햄버거</h3>
          <h3>좋아하는 색 : Pink</h3>
          <button onClick={clickLike}>like</button>
          <span>{heart}</span>
      </div>
  )
}


function App() {
  return (
    <div className="App">
      <Resume />
    </div>
  );
}

export default App;


