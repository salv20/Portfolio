import Header from "./components/Header"
import About from "./components/Mainbody/About"
import Services from "./components/Mainbody/Services"


function App() {

  return (
    <main>
      <div className=" bg-headerDarkBg text-navText space-y-6">
        <Header />
        <About />
      </div>
      <Services />
    </main>
  )
}

export default App
