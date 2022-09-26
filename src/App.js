import Router from './components/Router';

function App() {
  return (
    <div className="App">
      <Router url={window.location.pathname} />
    </div>
  );
}

export default App;
