import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(){

    const [usernameOrEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        const response = await axios.post(
            "http://localhost:8080/auth/login",
            {
                usernameOrEmail,
                password
            }
        );

        console.log("response : ",response);
        
        localStorage.setItem(
            "token",
            response.data.token
        );
        navigate("/product")
    };

    return (
        <>
            <input
                value={usernameOrEmail}
                onChange={(e) => setEmail(e.target.value)}/>

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={login}>
                Login
            </button>
        </>
    );
}

export default LoginPage;