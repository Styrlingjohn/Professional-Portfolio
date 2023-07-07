import Navbar from "./Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";



function Portfolio() {
    let component

    switch (window.location.pathname) {
        case "/":
            component = <Home />
            break
        case "/about":
            component = <About />
            break
        case "/experience":
            component = <Experience />
            break

    }



    return (
        <>
            <Navbar />
            <div className="container">
                {component}
            </div>
        </>
    );
};

export default Portfolio;