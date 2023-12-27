import Header from "./components/Header"
import About from "./components/Mainbody/About"
import Home from "./components/Mainbody/Home"
import Services from "./components/Mainbody/Services"
import Skills from "./components/Mainbody/Skills"


function App() {

  return (
    <main>
      <div className=" bg-headerDarkBg text-navText space-y-6">
        <Header />
        <Home />
      </div>
      <About />
      {/* <Skills /> */}
      <Services />
    </main>
  )
}

export default App
