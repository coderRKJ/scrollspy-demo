import logo from './logo.svg';
import './App.css';
import Scrollspy from './Scrollspy';

function App() {
  return (
    <div className="App">
      <Scrollspy />
      <header id="section1" className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section  id="section2" style={{ height: '100vh' }}>
        <p>Test Content</p>
      </section>
    </div>
  );
}

export default App;
