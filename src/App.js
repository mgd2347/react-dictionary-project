import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <i className="fas fa-glasses glasses-icon"></i>
          <p>
            What's the word?
          </p>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <a href="https://github.com/mgd2347/react-dictionary-project" target="_blank" rel="noreferrer">
            Open-source code
          </a>
          { } by { }
          <a href="https://www.instagram.com/emefialho_fz/" target="_blank" rel="noreferrer">
            MGD
          </a>
        </footer>
      </div>
      
    </div>
  );
}

export default App;
