import { Routes, Route } from "react-router-dom";
import App from "./components/App";

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<App />} />
  </Routes>
);

export default RoutesConfig;
