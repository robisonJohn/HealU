import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Particles from 'react-particles-js';
import { lightblue } from 'color-name';

function App() {
  return (
    <div className="App">
      <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900,
            }
          },
          shape: {
            type: "square",
            stroke: {
              width: 6,
              color: '#f9ab00'
            }
          }
        }
      }}
      />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
