import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Perfil from "./components/Perfil";
import Skill from "./components/Skill";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Perfil />
                <About />
                <Skill />
            </main>
            <Footer />
        </>
    );
}

export default App;
