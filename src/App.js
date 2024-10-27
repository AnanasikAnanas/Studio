import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col gap-[150px]">
      <Header/>
      <Main/>
      <About/>
    </div>
  );
}

export default App;
