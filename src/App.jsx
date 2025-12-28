import "./App.css";
import Banner from "./components/Banner/Banner";
import Recipes from "./components/Body/Recipes/Recipes";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="border-slate-300 border-2 w-full">
        <NavBar></NavBar>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>
    </>
  );
}

export default App;
