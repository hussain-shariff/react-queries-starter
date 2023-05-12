import useSuperHeroesData from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

const RQsuperHeroesPage = () => {
  const handleSucess = (data: any) => {
    console.log("Performing side effects after data fetching", data);
  };

  const handleError = (error: any) => {
    console.log("Performing side effects after encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(handleSucess, handleError);

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>{error.message}</h1>;

  return (
    <div className=" p-10">
      <h1 className=" underline font-bold">RQsuperHeroes Page</h1>
      {data?.map((user: any) => (
        <div key={user.id} className=" flex gap-3 items-center mt-2">
          <h1>{user.name}</h1>
          <Link to={`/superHeroDetails/${user.id}`}>
            <button className="underline">Show Details</button>
          </Link>
        </div>
      ))}
      <button onClick={refetch} className=" bg-black text-white py-1 px-4 mt-5">
        Fetch data
      </button>
    </div>
  );
};

export default RQsuperHeroesPage;
