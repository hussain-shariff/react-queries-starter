import { useQuery } from "react-query"
import axios from "axios"

const fetchUsers = () =>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

const fetchEmails = () =>{
    return axios.get('https://jsonplaceholder.typicode.com/comments')
}

const ParallelQueriesPage = () => {
    const {data : users} = useQuery('users', fetchUsers)
    const {data : emails} = useQuery('emails', fetchEmails)

  return (
    <div>
        <h1 className=" font-bold underline text-2xl text-center">ParallelQueries Page</h1>
        <h1 className="font-bold underline text-2xl ">Users</h1>
        {
            users?.data.map((user : any)=>(
                <h1 key={user.id}>{user.name}</h1>
            ))
        } 
        <h1 className="font-bold underline text-2xl">Emails</h1>
        {
            emails?.data.map((email : any)=>(
                <h1 key={email.id}>{email.email}</h1>
            ))
        } 
    </div>
  )
}

export default ParallelQueriesPage