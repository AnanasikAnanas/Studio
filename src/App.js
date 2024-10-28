import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div className="flex flex-col gap-[150px]">
      <Header/>
      <Main/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
