import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LandingPageProduct from './pages/LandingPageProduct/LandingPageProducts';
import LandingPageVideo from './pages/LandingPageVideo/LandingPageVideo';
import LandingPageAcne from './pages/LandingPageAcne/LandingPageAcne';
const App = () => {
  return (
    <div className="App ">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/acne" component={LandingPageAcne} />
      <Route exact path="/collagen" component={LandingPageProduct} />
      <Route exact path="/video" component={LandingPageVideo} />
    
    </div>
  );
}

export default App;
