import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
