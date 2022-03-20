import './App.css';

function App() {
  const inlineStyle={
    color:"red",
    backgroundColor:"green"
  }
  return (
    <div className="App">
      <header className="App-header" style={inlineStyle}>
        Merhaba React!!!
      </header>
    </div>
  );
}

export default App;
