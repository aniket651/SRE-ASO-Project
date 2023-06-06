import logo from './logo.svg';
import './App.css';
import LoginBox from './components/LoginBox';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='slantdiv'></div>
      <Header />
      <LoginBox />
      <Footer />
    </div>
  );
}

export default App;
