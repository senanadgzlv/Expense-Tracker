import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import "./App.css";
import IncomeExpenses from "./components/IncomeExpenses";
import TransActionList from "./components/TransActionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransActionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
