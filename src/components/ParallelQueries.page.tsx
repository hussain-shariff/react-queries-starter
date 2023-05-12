import { useQuery } from "react-query";
import axios from "axios";

const fetchUsers = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

const fetchEmails = () => {
  return axios.get("https://jsonplaceholder.typicode.com/comments");
};

const ParallelQueriesPage = () => {
  const { data: users } = useQuery("users", fetchUsers);
  const { data: emails } = useQuery("emails", fetchEmails, {
    select: (data) => {
      const emails = data.data.slice(0, 10);
      return emails;
    },
  });

  return (
    <div>
      <h1 className=" font-bold underline text-2xl text-center">
        ParallelQueries Page
      </h1>
      <div className=" border-b mb-5 p-10">
        <h1 className="font-bold underline text-2xl ">Users</h1>
        {users?.data.map((user: any) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>

      <div className=" p-10">
        <h1 className="font-bold underline text-2xl">Emails</h1>
        {emails?.map((email: any) => (
          <h1 key={email.id}>{email.email}</h1>
        ))}
      </div>
    </div>
  );
};

export default ParallelQueriesPage;
