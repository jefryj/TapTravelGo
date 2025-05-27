function Header(){
    return(
        <div className="Header">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <span className="mainheading">TapTravelGo</span>
                    </li>
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#">Logout</a></li>
                    <li className="nav-item"><a href="#contact">Contact</a></li>
                    <li className="nav-item"><a href="#aboutus">About Us</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;