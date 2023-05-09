import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () =>{
  return axios.get('https://jsonplaceholder.typicode.com/users')
}

const RQsuperHeroesPage = () => {
  const { isLoading, data, isError, error  } = useQuery('super-heroes', fetchSuperHeroes)
  
  
  if(isLoading) return <h1>Loading...</h1>

  if(isError) return <h1>{ error.message }</h1>

  return (
    <div className=" p-10">
      <h1 className=" underline font-bold">RQsuperHeroes Page</h1>
      { data?.data.map((user)=>(
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </div>
  )
}

export default RQsuperHeroesPage