import './App.scss'
import { Route, Routes } from 'react-router'
import { Navi } from './components/reusables/navi'
import { Header } from './components/reusables/header'

import {Landingpage} from "./components/pages/landingpage"

function App() {

  return (
    <main className="App">
      <Header />
      <Navi />

      <Routes>
        <Route exact path="/" element={<Landingpage />} />
      </Routes>
    </main>
  )
}

export default App
