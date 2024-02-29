import { Route, Router, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import Signin from "./pages/Signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signIn" element={<Signin />} />
    </Routes>
  );
}
export default App;
