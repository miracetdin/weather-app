import './App.css';
import './index.css';
import Container from './components/Container';
import { CityProvider } from './contexts/CityContext';
import { WeatherProvider } from './contexts/WeatherContext';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Open Sans, sans-serif', backgroundColor: "#FFFFE0"}}>
      <CityProvider>
        <WeatherProvider>
          <Container />
        </WeatherProvider>
      </CityProvider>
    </div>
  );
}

export default App;
