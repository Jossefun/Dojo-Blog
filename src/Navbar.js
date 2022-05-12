import { Link } from 'react-router-dom'; //Using reat Link for saving request time

const Navbar = () => {

    return(
        <nav className="navbar">
            <h1> The Dojo Blog</h1>

            <div className="links">
                <Link to="/" onClick={() => {window.location.href="/"}}>Home</Link>
                <Link to="/create" onClick={() => {window.location.href="/create"}}> New Blog  </Link>
            </div>
        </nav>
    );
}

export default Navbar;