import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";
import Modal from "./Components/modal/Modal";
import { useState } from "react";


function App() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <div id="app">
      <Header />
      <Main setModalShow={setModalShow} />
      <Footer />
      {modalShow && <Modal setModalShow={setModalShow} />}
    </div>
  );
}
export default App;