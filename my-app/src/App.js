import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // curl -X GET \\nhttps://www.strava.com/api/v3/athlete \\n-H 'Authorization: Bearer 4e116640059b7a38675c4cef5eb52f6b118c117d'
  fetch("https://www.strava.com/api/v3/athlete", {
    headers: {
      Authorization: "Bearer 4e116640059b7a38675c4cef5eb52f6b118c117d",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
