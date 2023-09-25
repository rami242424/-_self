import InputComponent from "./components/InputComponent";
import SomethingComponent from "./components/SomethingComponent";
import useMouseLocation from "./Hooks/useMouseLocation";

function App() {
  console.log(useMouseLocation());

  return (
    <div>
      <div style={{height: 100, width: 100, backgroundColor: "royalblue"}}></div>
      <InputComponent />
      <SomethingComponent />
    </div>
  );
}
export default App;
