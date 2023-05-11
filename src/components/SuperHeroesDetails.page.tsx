import { useParams } from "react-router-dom"
import { useGetDetails } from "../hooks/useGetDetails"

const SuperHeroesDetailsPage = () => {
    const { id } = useParams()
    const { data, isLoading, isError, error } = useGetDetails(id)
    console.log(data?.data);
    
  if(isLoading) return <h1>Loading...</h1>

  if(isError) return <h1>{ error.message }</h1>

  return (
    <div className=" text-center">
      <h1 className=" font-bold p-10">{data?.data.name} - { data?.data.username }</h1>
    </div>
  )
}

export default SuperHeroesDetailsPage