import './App.css';
import HeroContent from './HeroContent/HeroContent';
import DrinkAgain from './DrinkAgain/DrinkAgain';
import KeepDrinking from './KeepDrinking/KeepDrinking';

const App = () => {
  return (
  <div className="App">
      <HeroContent />
    <main>  
      <DrinkAgain />
      <KeepDrinking />
    </main>
  </div>
  )
}

export default App
