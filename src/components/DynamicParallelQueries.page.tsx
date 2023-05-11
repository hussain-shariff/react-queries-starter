import { useQueries } from "react-query"
import axios from "axios"

type DynamicParallelQueriesPageProps = {
    userIDS : number[]
}

const fetchUser = ({ queryKey }: any) =>{
    const id = queryKey[1]
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

const DynamicParallelQueriesPage = ({userIDS} : DynamicParallelQueriesPageProps) => {
    const queryResults = useQueries(
        userIDS.map((id : number)=>{
            return{
                queryKey : ['user', id],
                queryFn : fetchUser
            }
        })
    )
    console.log(queryResults);
    
  return (
    <div>DynamicParallelQueries.page</div>
  )
}

export default DynamicParallelQueriesPage