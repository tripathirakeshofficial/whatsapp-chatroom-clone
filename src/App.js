import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/contacts/:contactId">
              <Chat />
            </Route>
            <Route path="/">{/*<Chat />*/}</Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
