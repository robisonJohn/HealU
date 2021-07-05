// MAIN IMPORTS
import './App.css';
import axios from 'axios';

// COMPONENT IMPORTS
import Navbar from './components/Navbar.jsx';
// import Header from './components/Header.jsx';
import Particles from 'react-particles-js';
import Feeling from "./components/Feeling.jsx";
import About from "./components/About.jsx";
import Form from "./components/Form.jsx";

import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseURL, config } from "./services";

function App() {
  const [feelings, setFeelings] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const retrieveFeelings = async () => {
      const resp = await axios.get(baseURL, config);
      setFeelings(resp.data.records);
      console.log(resp.data.records);
      
    }
    retrieveFeelings();
    
  }, [toggleFetch]);

  console.log(feelings);
  return (
    <div className="App">
      <Navbar />
      <Route path="/">
        <main>
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
          
          
        </main>
        
      </Route>
      

      <Route path="/old">
        <main>
            {feelings.map((feeling) => (
            <Feeling key={feeling.id} feeling={feeling} setToggleFetch = {setToggleFetch}/>
          ))}
        </main>  
      </Route>

      <Route path="/new">
        <Form setToggleFetch={setToggleFetch}/>
      </Route>

      <Route path="/"></Route>

      <Route path="/visualize"></Route>

      <Route path="/about">
        <About />
      </Route>
      
    </div>
  );
}

export default App;
