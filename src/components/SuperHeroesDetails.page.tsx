import { useParams } from "react-router-dom"
import { useGetDetails } from "../hooks/useGetDetails"

const SuperHeroesDetailsPage = () => {
    const { id } = useParams()
    const { data } = useGetDetails(id)
    console.log(data?.data);
    
  return (
    <div>SuperHeroesDetails.page</div>
  )
}

export default SuperHeroesDetailsPage