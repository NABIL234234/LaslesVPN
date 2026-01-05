import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/home";
// import RouterView from "./router";

function App() {
  return (
    <>
      <Layout>
        <Home />
        {/* <RouterView /> */}
      </Layout>
    </>
  );
}

export default App;
