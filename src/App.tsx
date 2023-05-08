import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query" 
import HomePage from "./components/Home.page"
import RQsuperHeroesPage from "./components/RQsuperHeroes.page"
import SuperHeroesPage from "./components/SuperHeroes.page"
import Nav from "./components/Nav"

const queryClient = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
        <Router>
          <Nav/>
          <Routes>
            <Route path="/home" element={<HomePage/>}></Route>
            <Route path="/superHeroes" element={<SuperHeroesPage/>}></Route>
            <Route path="/RQsuperHeroes" element={<RQsuperHeroesPage/>}></Route>
          </Routes>
        </Router>
    </QueryClientProvider>
      
  )
}

export default App
