import "./App.css";

function App() {
  const handleNameChange = () => {
    const names = ["Anna", "Veronica", "Wendy", "Luna"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello {handleNameChange()}!</p>
      </header>
    </div>
  );
}

export default App;
