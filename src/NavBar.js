import "./Nav.css";

function NavBar(){
    return(
        <header id="navbar">
            <h1 className="logo">Flash Quiz</h1>
            <nav>
                <ul className="navlinks">
                    <li><a>Home</a></li>
                    <li><a>Play</a></li>
                    <li><a>Credits</a></li>
                </ul>
            </nav>
            <a href="#" class="cta"><button>Contact</button></a>
        </header>
    )
}

export default NavBar;