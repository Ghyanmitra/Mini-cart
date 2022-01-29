import Home from "./features/home/Home";
import Navbar from "./features/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Home></Home>
      </div>
    </>
  );
}

export default App;
