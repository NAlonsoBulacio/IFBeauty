import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
function App() {
  return (
    <div className="App font-sans-200">
      <Route exact path="/" component={LandingPage} />
    </div>
  );
}

export default App;
