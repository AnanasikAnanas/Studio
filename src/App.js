import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
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
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
