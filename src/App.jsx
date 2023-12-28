import Header from "./components/Header"
import About from "./components/Mainbody/About"
import Home from "./components/Mainbody/Home"
import Project from "./components/Mainbody/Project"
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
      <Skills />
      <Services />
      <Project />
    </main>
  )
}

export default App
