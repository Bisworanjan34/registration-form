import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import RegistrationForm from './components/registrationForm/RegistrationForm'
import RegistrationTemplate from './components/regitionTemplate/RegistrationTemplate'

function App() {
  

  return (
   <>
   <div className="div position-sticky top-0">

      <Navbar/>
   </div>
      <Routes>
        <Route path='/' element={<RegistrationForm/>}/>
        <Route path='/registrationtemplate' element={<RegistrationTemplate/>}/>
      </Routes>
   </>
  )
}

export default App
