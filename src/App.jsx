import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Parcours from './Components/Parcours/Parcours'
import Projects from './Components/Projects/Projects'

function App() {

  return (
    <>
      <div className='monPortfolio'>
        <Navbar/>
        <Header/>
        <Parcours/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
