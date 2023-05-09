import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () =>{
  return axios.get('https://jsonplaceholder.typicode.com/users')
}

const RQsuperHeroesPage = () => {
  const handleSucess = (data : any) =>{
    console.log('Performing side effects after data fetching', data);
  }
  
  const handleError = (error : any) =>{
    console.log('Performing side effects after encountering error', error);
  }

  const { isLoading, data, isError, error, isFetching, refetch  } = useQuery(
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
      refetchOnWindowFocus : true,
      // disable fetching
      enabled : false,
      // Callback function if the data is fetched successfully
      onSuccess : handleSucess,
      // Callback function if there are any errors
      onError : handleError,
      // Transform the incoming data from the api to the required format
      // example in this case transform to an array of users
      select : (data) =>{
        const userNames = data.data.map((user : any)=> user.name)
        return userNames
      }
    }
  )

  if(isLoading) return <h1>Loading...</h1>

  if(isError) return <h1>{ error.message }</h1>

  return (
    <div className=" p-10">
      <h1 className=" underline font-bold">RQsuperHeroes Page</h1>
      { data?.map((user : string)=>(
        <h1 key={user}>{user}</h1>
      ))}
      <button onClick={refetch} className=" bg-black text-white py-1 px-4 mt-5">Fetch data</button>
    </div>
  )
}

export default RQsuperHeroesPage