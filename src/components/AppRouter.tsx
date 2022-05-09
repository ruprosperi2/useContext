import {Link, Route, Routes} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import AboutScreen from "./AboutScreen";

const AppRouter = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="about">About</Link>
                            <Link className="nav-link" to="login">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="about" element={<AboutScreen/>}/>
                <Route path="login" element={<LoginScreen/>}/>
            </Routes>
        </>
    );
};

export default AppRouter;
