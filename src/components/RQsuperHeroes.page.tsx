import useSuperHeroesData from "../hooks/useSuperHeroesData"

const RQsuperHeroesPage = () => {
  const handleSucess = (data : any) =>{
    console.log('Performing side effects after data fetching', data);
  }
  
  const handleError = (error : any) =>{
    console.log('Performing side effects after encountering error', error);
  }

  const { isLoading, data, isError, error, isFetching, refetch  } = useSuperHeroesData(handleSucess, handleError)

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