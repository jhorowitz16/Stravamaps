import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./dashboard/Dashboard";

const TOKEN = "081b0537783749c26cfe775f746b7aaf3dd4ca63";

function query(request) {
  return fetch(request, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    });
}

function App() {
  const profile_url = query("https://www.strava.com/api/v3/athlete");
  const statistics_url = query("https://www.strava.com/api/v3/athletes/36006028/stats");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Dashboard statistics={statistics_url}/>
      </header>
    </div>
  );
}

export default App;
