import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () =>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    }

const useSuperHeroesData = (handleSucess  : any, handleError  : any) => {
    return useQuery(
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
                const userNames = data.data.map((user : any)=> {
                    return {
                        id : user.id,
                        name : user.name,
                    }
                })
                return userNames
            }
        }
    )
}

export default useSuperHeroesData