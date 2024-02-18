import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Link to="/" data-testid="main-link">main</Link>
            <Link to="/about" data-testid="about-link">about</Link>
            <Link to="/users" data-testid="users-link">users</Link>
        </>
    );
}

export default NavBar;