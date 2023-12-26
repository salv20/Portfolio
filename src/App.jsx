import Header from "./components/Header"
import Home from "./components/Mainbody/Home"


function App() {

  return (
    <main className=" space-y-4">
      <div className=" bg-headerDarkBg text-navText space-y-6">
        <Header />
        <Home />
      </div>
      <p>gegg</p>
    </main>
  )
}

export default App
