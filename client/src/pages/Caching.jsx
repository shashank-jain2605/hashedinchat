import React from "react";
import { useQuery } from "react-query";

const fetchData = async () => {
  const response = await fetch("https://reqres.in/api/users?page=2");
  const data = await response.json();
  console.log("data zxc", data);
  return data;
};

const Caching = () => {
  const { data, isLoading, error } = useQuery("data", fetchData, {
    staleTime: 60000, // Cache for 1 minute
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col mx-auto w-96 justify-center items-center">
      <h1>API Client-side Caching with React Query</h1>
      <button
        onClick={() => fetchData()}
        className="bg-orange-400 px-2 py-2 w-32 my-4 rounded-md text-white hover:bg-orange-600"
      >
        Fetch Data
      </button>
      <div>
        {data.data.map((item) => (
          <div key={item.id}>{item.first_name}</div>
        ))}
      </div>
    </div>
  );
};

export default Caching;
