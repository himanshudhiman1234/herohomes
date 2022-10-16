import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { render } from "react-dom";

import Navbar from './Componet/Navbar';
import Footer from './Componet/Footer';
import Index from './Componet/Index';
import About from './Componet/About';
import Contact from './Componet/Contact';
import Gallery from './Componet/Gallery';

function App() {
  return (
   <>
   

<Router>
<Navbar />
    <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
    </Switch>
<Footer />
</Router>


    {/* <Contact /> */}
  {/* <About /> */}
  {/* <Gallery /> */}

    

   

   </>
  );
}

export default App;
