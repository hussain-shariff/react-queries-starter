import {useQuery} from 'react-query'
import axios from "axios"

const fetchApi = (id : any) =>{
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

export const useGetDetails = (id : any) => {
  return useQuery(
        ['super-hero', id], 
        ()=> fetchApi(id)
    )
}
