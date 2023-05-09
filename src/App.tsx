import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from "./components/Home.page"
import RQsuperHeroesPage from "./components/RQsuperHeroes.page"
import SuperHeroesPage from "./components/SuperHeroes.page"
import Nav from "./components/Nav"
import SuperHeroesDetailsPage from "./components/SuperHeroesDetails.page";

const queryClient = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
        <Router>
          <Nav/>
          <Routes>
            <Route index element={<HomePage/>}></Route>
            <Route path="/superHeroes" element={<SuperHeroesPage/>}></Route>
            <Route path="/RQsuperHeroes" element={<RQsuperHeroesPage/>}></Route>
            <Route path="/superHeroDetails/:id" element={<SuperHeroesDetailsPage/>}></Route>
          </Routes>
        </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
      
  )
}

export default App
