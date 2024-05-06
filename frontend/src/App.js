import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Test from './pages/LandingPage/Test/Test';
import LandingPageProduct from './pages/LandingPageProduct/LandingPageProducts';
function App() {


  return (
    <div className="App font-sans-200">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/collagen" component={LandingPageProduct} />
      <Route exact path="/test" component={Test} />
    </div>
  );
}

export default App;
