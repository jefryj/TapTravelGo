function Header(){
    return(
        <div className="Header">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <span className="mainheading">TapTravelGo</span>
                    </li>
                    <div style={{ display: "flex" }}>
                        <li className="nav-item"><a href="#">Home</a></li>
                        <li className="nav-item"><a href="#">Logout</a></li>
                        <li className="nav-item"><a href="#">Contact</a></li>
                        <li className="nav-item"><a href="#">About Us</a></li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Header;