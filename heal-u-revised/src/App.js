// main imports
import './App.css';
import './Form.css';
import './Feeling.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
// component imports
import Greeting from "./components/Greeting.jsx";
import Navbar from './components/Navbar.jsx';
import NavOldFeeling from './components/NavOldFeeling.jsx';
import NavNewFeeling from './components/NavNewFeeling.jsx';
import Feeling from './components/Feeling.jsx';
import CreateFeeling from './components/CreateFeeling.jsx';
import EditFeeling from './components/EditFeeling.jsx';
import About from './components/About.jsx';
// variable imports
import { useEffect, useState } from 'react';
import { baseURL, config } from "./services";
import { Route, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';



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

  return (
    <div className="App">
      <Navbar />
      
      <Route exact path="/">
        <main>
            <Row>
              <Link to="/about">   
                  <Greeting />
              </Link>
              
            </Row>
            <Col id="main-buttons">
              <Row id="button-1-position"><NavNewFeeling /></Row>
              <Row id="button-2-position"><NavOldFeeling /></Row>
            </Col>
          
          
          
        </main>  
      </Route>  

      <Route path="/oldPosts">
        <main>
          {feelings.map((feeling) => (
          <Feeling key={feeling.id} feeling={feeling} setToggleFetch = {setToggleFetch}/>
        ))}
        </main>   
      </Route>

      <Route path="/new">
        <CreateFeeling setToggleFetch={setToggleFetch}/>
      </Route>

      <Route path="/edit/:id">
        <EditFeeling feelings={feelings} setToggleFetch={setToggleFetch}/>
      </Route>

      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}
export default App;
