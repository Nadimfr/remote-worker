import logo from "./logo.svg";
import "./App.css";
import ResponsiveDrawer from "./components/ResponsiveDrawer/ResponsiveDrawer";
import Onboard from "./screens/Onboard/onboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tracking from "./screens/Tracking/Tracking";

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="onboard" element={<Onboard />} />
              <Route path="order-tracking" element={<Tracking />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ResponsiveDrawer>
    </div>
  );
}

export default App;
