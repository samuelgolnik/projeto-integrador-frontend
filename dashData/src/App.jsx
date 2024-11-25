import React, { useState } from "react";
import "./App.css";
import ChartPage_k7 from "./ChartPage_k7";
import ChartPage from "./ChartPage_n2";
import SensorReadings from "./SensorReadings";

function App() {
  const [activeTab, setActiveTab] = useState("painel");

  const renderContent = () => {
    switch (activeTab) {
      case "painel":
        return <SensorReadings />;
      case "k7":
        return <ChartPage_k7 />;
      case "n2":
        return <ChartPage />
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <button onClick={() => setActiveTab("painel")}>Painel Inicial</button>
        <button onClick={() => setActiveTab("k7")}>Rótula do Taffarel</button>
        <button onClick={() => setActiveTab("n2")}>Estação Cruzeiro</button>
      </aside>
      <main className="content">{renderContent()}</main>
    </div>
  );
}

export default App;
