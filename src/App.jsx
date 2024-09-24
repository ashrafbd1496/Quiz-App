import "./App.css";
import Home from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Quiz from "./pages/Quiz/Quiz";

export default function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Signup /> */}
      {/* <Signin /> */}
      <Quiz />
    </Layout>
  );
}
