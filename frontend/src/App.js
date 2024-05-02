import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Test from './pages/LandingPage/Test/Test';
function App() {


  return (
    <div className="App font-sans-200">
      <Route exact path="/testeando-subdominios" component={LandingPage} />
      <Route exact path="/test" component={Test} />
    </div>
  );
}

export default App;
