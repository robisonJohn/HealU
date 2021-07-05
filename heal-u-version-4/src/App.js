// MAIN IMPORTS
import './App.css';

// COMPONENT IMPORTS
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Particles from 'react-particles-js';

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
                    color: '#6a0dad'
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
