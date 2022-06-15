import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const fetchUsers = async () => {
    const data = await axios.get("https://randomuser.me/api/?results=50");
    setUser(data.data.results);
    console.log(data.results);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      {user.map((item) => (
        <div className="card m-2 p-2 " style={{ width: 18 + "rem" }}>
          <img src={item.picture.large} className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title text-primary">
              {item.name.title} {item.name.first} {item.name.last}
            </h3>

            <b>{item.phone}</b>
            <br />
            <em>{item.email}</em>
            <br />
            <b>
              {item.location.city}, {item.location.country}
            </b>
            <br />
            <br />
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
