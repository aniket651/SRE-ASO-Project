import logo from './logo.svg';
import './App.css';
import LoginBox from './components/LoginBox';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className='slantdiv'></div>
      <Header />
      <LoginBox />
      <div className='footer'>
        Copyright @ 2021 by Academy Sports & Outdoors 
      </div>
    </div>
  );
}

export default App;
