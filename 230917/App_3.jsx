* 기존 jsx에는 {heart}
**3.jsx 에는 {heart ? heart : ''}
결과값은 똑같은데 어떤 차이인지 질문올려둠..ㅜ


import { useState } from 'react'

function Resume() {
  const [like, setLike] = useState(false);
  let heart = like ? '❤️' : ''

  function clickLike() {
    if (like) {
      setLike(false)
    } else {
      setLike(true)
    }
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
          <span>{heart ? heart : ''}</span>
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


