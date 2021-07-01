import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

import CreateFeeling from "./components/CreateFeeling.jsx";
import Feeling from "./components/Feeling.jsx";
import Navbar from "./components/Navbar.jsx";
import EditFeeling from "./components/EditFeeling.jsx";
import Greeting from "./components/Greeting.jsx";

import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react"; 
import { baseURL, config } from "./services";
import { Button } from 'react-bootstrap';

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
          <Greeting />
          <Link to = "/new"><Button id="nav-button">How are you today?</Button></Link>
          <br />
          <Link to="/oldPosts"><Button id="nav-button">How have you been doing?</Button></Link>
        </main>  
      </Route>  

      <Route path="/oldPosts">
        <main>
          {feelings.map((feeling) => (
          <Feeling key={feeling.id} feeling={feeling} setToggleFetch = {setToggleFetch}/>
        )
          
        )}
        </main>
        
      </Route>

      <Route path="/new">
        <CreateFeeling setToggleFetch={setToggleFetch}/>
      </Route>

      <Route path="/edit/:id">
        <EditFeeling feelings={feelings} setToggleFetch={setToggleFetch}/>
      </Route>
    </div>
  );
}

export default App;
