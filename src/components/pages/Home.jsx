import react from "react";
import { Outlet, Link } from "react-router-dom";
import "../style/home.scss"
import Header from "./Header";
import Vitrine from "./Vitrine";

function Home() {
  return (
    <div className="containerHome">
        <Header/>
        <Vitrine/>
    </div>
  );
}

export default Home;