
import { Outlet } from "react-router"
import Nav from './components/Nav'
import Footer from './components/Footer'




function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
