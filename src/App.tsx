import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom"
import HomePage from "./components/Home.page"
import RQsuperHeroesPage from "./components/RQsuperHeroes.page"
import SuperHeroesPage from "./components/SuperHeroes.page"

function App() {
  
  return (
      <Router>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/superHeroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/RQsuperHeroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
        <Routes>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/superHeroes" element={<SuperHeroesPage/>}></Route>
          <Route path="/RQsuperHeroes" element={<RQsuperHeroesPage/>}></Route>
        </Routes>
      </Router>
  )
}

export default App
