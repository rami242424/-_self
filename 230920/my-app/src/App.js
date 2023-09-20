function Div() {
  return <div className="container"></div>
}

function H1() {
  return <h1 className="it">테스트 페이지</h1>
}

function Section() {
  return <section></section>
}

function H2() {
  return <h2 className="section-title">섹션제목</h2>
}

function Img() {
  return <img className="section-img" src="img.jpg" alt="섹션이미지"></img>
}

function P() {
  return <p className="section-contents">내용</p>
}

function App() {
  return (
    <div>
      <Div>
        <H1 />
        <Section>
          <H2 />
          <Img />
          <P />
        </Section>
      </Div>
    </div>
  );
}
export default App;
