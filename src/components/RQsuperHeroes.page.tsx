import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () =>{
  return axios.get('https://jsonplaceholder.typicode.com/users')
}

const RQsuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching  } = useQuery(
    'super-heroes', 
    fetchSuperHeroes,
    {
      // Fetched data will be cached for provided time and reused, therby avoiding loading screen
      cacheTime : 5000,
      // Use stale data for the provided time , without making subsequent requests
      staleTime : 30000,
      // Refetch data everytime the component mounts
      refetchOnMount : true,
      // Automatically refetches data when the backend data changes
      refetchOnWindowFocus : true
    }
  )

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