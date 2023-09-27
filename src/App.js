import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import data from "./data/data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main data={data} />
      <Footer />
    </div>
  );
}

export default App;
