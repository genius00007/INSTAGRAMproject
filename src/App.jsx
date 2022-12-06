import "./App.css";
import Navbar from "./components/Navbar";
import Story from "./components/storyCom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bigContainer">
        <div className="posts">
          <Story />
        </div>
        <div className="profile"></div>
      </div>
    </div>
  );
}

export default App;
