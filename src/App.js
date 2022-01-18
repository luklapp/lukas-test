import logo from './logo.svg';
import './App.css';

function App() {
  console.log(window.data);
  console.log(window.data2);

  const modifiedData = window.data.map(x => x*2);

  return (
    <div className="App">
      Hier kannst du dann über <code>window</code> auf die Daten zugreifen, die du in der index.html definiert hast:

      <pre>{JSON.stringify(window.data)}</pre>
      <pre>{JSON.stringify(window.data2)}</pre>
      <pre>{JSON.stringify(modifiedData)}</pre>

    </div>
  );
}

export default App;
