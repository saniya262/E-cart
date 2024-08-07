
import Apifetch from './Apifetch';
import './App.css';
import Bann from './Bann';
import Footer from './Footer';
import Header from './Header';


function App() {
  return (
    <div className="App"> 
      <Header/>
      <Bann/>
      <Apifetch/>
      <Footer/>
    </div>
  );
}

export default App;
