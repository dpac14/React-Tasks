import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import Nav from './component/Nav';
import Hook1 from './component/Hook1';

function App() {
  return (
    <div className='App'>
      <Nav title="PSK Technologies" button="Click Me" />
      <Form  button="Submit Now !"/>
      
      <Hook1/>
    </div>

  );
}

export default App;
