import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
                <li>
                    <Link to="expense">Expense</Link>
                </li>
                <li>
                    <Link to="tasks">Tasks</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;