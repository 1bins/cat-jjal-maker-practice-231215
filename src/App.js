import './App.css';
import Title from './Components/Title';
import FormBox from './Components/FormBox';
import MainCard from './Components/MainCard';
import Favorites from './Components/Favorites';

function App() {
  return (
    <div className="App">
      <Title></Title>
      <FormBox></FormBox>
      <MainCard></MainCard>
      <Favorites></Favorites>
    </div>
  );
}

export default App;
