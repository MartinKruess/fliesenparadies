import './App.scss'
import { Route, Routes } from 'react-router'
import { Navi } from './components/reusables/navi'
import { Header } from './components/reusables/header'

import {Landingpage} from "./components/pages/landingpage"
import { Services } from './components/pages/services'
import { Company } from './components/pages/company'
import { Team } from './components/company_assets/team'
import { Impressum } from './components/pages/impressum'
import { Footer } from './components/reusables/footer'
import { Contact } from './components/reusables/contact'
import { ServiceSubPage } from './components/servicepage_assets/servicesubpage'
import { CareerPage } from './components/pages/career'

function App() {

  return (
    <main className="App">
      <Header />
      <Navi />

      <Routes>
        <Route exact path="/" element={<Landingpage />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/service/:service" element={<ServiceSubPage />} />
        <Route exact path="/unternehmen" element={<Company />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/impressum" element={<Impressum />} />
        <Route exact path="/karriere" element={<CareerPage />} />
      </Routes>
      <Contact />
      <Footer />
    </main>
  )
}

export default App
