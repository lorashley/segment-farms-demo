import "./App.css";
import PageRouter from "./components/router.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Segment Farms</h1>
      </header>
      <main>
        <div className="content">
          <PageRouter />
        </div>
      </main>
    </div>
  );
}

export default App;
