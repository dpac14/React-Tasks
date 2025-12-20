import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import Nav from './component/Nav';

function App() {
  return (
    <div className='App'>
      <Nav title="PSK Technologies" button="Click Me" />
      <Form  button="Submit Now !"/>
    </div>

  );
}

export default App;
