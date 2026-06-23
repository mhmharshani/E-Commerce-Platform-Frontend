import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
         <nav style={{ display: "flex", gap: "10px" }}>
            
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>

            <button onClick={logout}>
                Logout
            </button>

        </nav>
    );
}

export default Navbar;