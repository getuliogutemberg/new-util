import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes.jsx";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;