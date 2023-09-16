import Award from "./Components/Award";
import School from "./Components/School";
import Certification from "./Components/Certification";
import Privacy from "./Components/Privacy";

function App() {
  return (
		<div>
      <h1>이력서 작성 확인중</h1>
      <Privacy name="오가람" phone= '010-9989-9898' />
      <Certification />
      <School />
      <Award
        title = '경력'
        contents= '경력내용'
      />
      <Award
        title = '수상경력'
        contents= '수상경력내용'
      />
		</div>
  );
}
export default App;
