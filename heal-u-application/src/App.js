import './App.css';
import CreateFeeling from "./components/CreateFeeling.jsx";
import Feeling from "./components/Feeling.jsx";
import Navbar from "./components/Navbar.jsx";
import EditFeeling from "./components/EditFeeling.jsx";
import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react"; 
import axios from 'axios';
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

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <main>
          <h1>Hi, welcome to Heal U!</h1>
          <p>The goal of Heal U is simple: to provide benchmarks and metrics to allow individuals
            to track their mental health progression over time. 
          </p>
          <p>Tracking these trends are crucial towards gaining an understanding of the aspects of our life
            that bring us fulfillment and meaning on a daily basis.
          </p>
          <p>Interested in trying Heal U out? Click here to learn more!</p>
          <Link to = "/new"><button id="nav-button">How are you today?</button></Link>
          <p>Already a user? Click here to access your prior data!</p>
          <Link to="/oldPosts"><button id="nav-button">How have you been doing?</button></Link>
        </main>  
      </Route>  

      <Route path="/oldPosts">
      <main>

          {feelings.map((feeling) => (

            <Feeling key={feeling.id} feeling={feeling} setToggleFetch={setToggleFetch}/>
          ))}
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
