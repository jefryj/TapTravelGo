import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();
    return(
        <div className="Header">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <span className="mainheading">TapTravelGo</span>
                    </li>
                    <li className="nav-item">
                        <a href="#" onClick={e => {e.preventDefault(); navigate('/');}}>Home</a>
                    </li>
                
                    <li className="nav-item"><a href="#contact">Contact</a></li>
                    <li className="nav-item"><a href="#aboutus">About Us</a></li>
                    <li className="nav-item">
                        <a href="#" onClick={e => {e.preventDefault(); navigate('/login');}}>Logout</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;