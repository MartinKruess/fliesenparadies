import './App.scss'
import { Route, Routes } from 'react-router'
import { Navi } from './components/reusables/navi'
import { Header } from './components/reusables/header'

import {Landingpage} from "./components/pages/landingpage"
import { Services } from './components/pages/services'
import { Company } from './components/pages/company'

function App() {

  return (
    <main className="App">
      <Header />
      <Navi />

      <Routes>
        <Route exact path="/" element={<Landingpage />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/unternehmen" element={<Company />} />
      </Routes>
    </main>
  )
}

export default App
