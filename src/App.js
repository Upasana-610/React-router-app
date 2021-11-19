import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AddExpense from "./Pages/AddExpense/AddExpense";
import Navbar from "./core/Navbar";
import { GlobalContext, GlobalProvider } from "./context/ExpenseContext";
import SettingsApp from "./Pages/SettingsApp/SettingsApp";
import Layout from "./Pages/LayoutPage/Layout";
import Profile from "./Pages/Profile/Profile";
import { Fragment, useContext } from "react";
import EditExpense from "./Pages/EditExpense/EditExpense";
import { LayoutContext, LayoutProvider } from "./context/LayoutContext";

function App() {
  let { theme } = useContext(GlobalContext);
  let { layout } = useContext(LayoutContext);
  return (
    <Fragment>
      <LayoutProvider>
        <GlobalProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/addexpense" component={AddExpense} />
              <Route exact path="/settings" component={SettingsApp} />
              <Route exact path="/layout" component={Layout} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/editList/:id" component={EditExpense} />
            </Switch>
          </Router>
        </GlobalProvider>
      </LayoutProvider>
    </Fragment>
  );
}

export default App;
