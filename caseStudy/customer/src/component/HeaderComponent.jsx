import { Link } from "react-router-dom";
import "../assets/css/header.css";

function HeaderComponent() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark furama-navbar shadow">
            <div className="container">

                <Link
                    className="navbar-brand fw-bold fs-3"
                    to="/"
                >
                    🏨 Furama Resort
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link
                                className="nav-link px-3"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link px-3"
                                to="/customers"
                            >
                                Khách Hàng
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default HeaderComponent;