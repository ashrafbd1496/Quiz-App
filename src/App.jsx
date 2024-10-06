import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'; 
import "./App.css";
import Home from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}
