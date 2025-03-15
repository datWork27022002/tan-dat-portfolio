import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Service from './components/Service';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Home />
                <Project />
                <Service />
                <Experience />
                <Contact />
            </main>
            <Footer />
            <GoToTop />
        </>
    );
}

export default App;
