import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./dashboard/Dashboard";

const TOKEN = "4e116640059b7a38675c4cef5eb52f6b118c117d";

function query(request) {
  fetch(request, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function App() {
  query("https://www.strava.com/api/v3/athlete");
  query("https://www.strava.com/api/v3/athletes/36006028/stats");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
