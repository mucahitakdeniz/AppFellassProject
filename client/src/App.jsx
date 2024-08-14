import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./route/AppRouter"

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
