import Navigation from "./components/Navigation"
import Hero from "./sections/Hero/Hero"
import Layanan from "./sections/Layanan/Layanan"



function App() {
  return (
    <>
      <div className="main-container w-full ">
        {/* Navigation Section */}
        <Navigation />
        {/* Hero Section */}
        <Hero />
        <Layanan/>

      </div>

    </>
  )
}

export default App
