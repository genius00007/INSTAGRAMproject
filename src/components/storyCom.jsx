import { useState, useEffect } from "react";
import UserBox from "../Page/story";
import { instance } from "../hooks/useInstance";
import "../App.css";

export default function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const rosponse = await instance.get(`users`);
    setData(rosponse.data.users);
    console.log(rosponse);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {data &&
        data.map((users) => {
          return <UserBox users={users} />;
        })}
    </div>
  );
}
