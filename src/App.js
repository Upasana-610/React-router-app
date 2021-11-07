import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AddExpense from "./Pages/AddExpense/AddExpense";
import Navbar from "./core/Navbar";
import { GlobalContext, GlobalProvider } from "./context/ExpenseContext";
import SettingsApp from "./Pages/SettingsApp/SettingsApp";
import Layout from "./Pages/LayoutPage/Layout";
import Profile from "./Pages/Profile/Profile";
import { useContext } from "react";

function App() {
  let { theme } = useContext(GlobalContext);
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/addexpense" component={AddExpense} />
          <Route path="/settings" component={SettingsApp} />
          <Route path="/layout" component={Layout} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
