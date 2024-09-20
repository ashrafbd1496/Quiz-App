import Home from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";

export default function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <Signup /> */}
      <Signin />
    </Layout>
  );
}
