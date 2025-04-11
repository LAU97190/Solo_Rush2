import { Link } from "react-router"


const Nav = () => {
    return (
        <nav>
            <Link to="/">Acceuil</Link>
            <Link to="/About">A propros</Link>
            <Link to="/Article">Cartoon</Link>
        </nav>
    );
};

export default Nav