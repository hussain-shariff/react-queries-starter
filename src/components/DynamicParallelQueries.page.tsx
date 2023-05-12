import { useQueries } from "react-query";
import axios from "axios";

type DynamicParallelQueriesPageProps = {
  userIDS: number[];
};

const fetchUser = ({ queryKey }: any) => {
  const id = queryKey[1];
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};

const DynamicParallelQueriesPage = ({
  userIDS,
}: DynamicParallelQueriesPageProps) => {
  const queryResults = useQueries(
    userIDS.map((id: number) => {
      return {
        queryKey: ["user", id],
        queryFn: fetchUser,
      };
    })
  );

  return (
    <div className=" p-10">
      <h1 className=" font-bold underline text-2xl text-center">
        DynamicParallelQueries Page
      </h1>
      <h1 className=" font-bold underline text-2xl mt-5">Users</h1>
      {queryResults.map((user) => (
        <h1>{user.data?.data.name}</h1>
      ))}
    </div>
  );
};

export default DynamicParallelQueriesPage;
