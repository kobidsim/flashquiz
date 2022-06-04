import "./Nav.css";
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <header id="navbar">
            <h1 className="logo">Flash Quiz</h1>
            <nav>
                <ul className="navlinks">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/play">Play</Link></li>
                    <li><Link to="/credits">Credits</Link></li>
                </ul>
            </nav>
            <Link to="/contacts" class="cta"><button>Contact</button></Link>
        </header>
    )
}

export default NavBar;