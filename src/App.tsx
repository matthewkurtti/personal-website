import Navbar from "./components/Navbar";
import mountainPic from "./assets/mountain-pic.jpg";

function App() {
  return (
    <>
      <Navbar/>
      <img src={mountainPic} alt="" />
    </>
  );
}

export default App;
