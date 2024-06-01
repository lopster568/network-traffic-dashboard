import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
function App() {
  return (
    <>
      <div className="app">
      <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
