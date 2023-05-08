import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom"
import HomePage from "./components/Home.page"
import RQsuperHeroesPage from "./components/RQsuperHeroes.page"
import SuperHeroesPage from "./components/SuperHeroes.page"
import Nav from "./components/Nav"

function App() {
  
  return (
      <Router>
          <Nav/>
        <Routes>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/superHeroes" element={<SuperHeroesPage/>}></Route>
          <Route path="/RQsuperHeroes" element={<RQsuperHeroesPage/>}></Route>
        </Routes>
      </Router>
  )
}

export default App
