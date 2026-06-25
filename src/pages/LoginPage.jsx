import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

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
            <form className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="email1">Your email</Label>
                    </div>
                    <TextInput id="email1" value={usernameOrEmail} type="email" placeholder="name@flowbite.com" required 
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="password1">Your password</Label>
                    </div>
                    <TextInput id="password1" value={password} type="password" required 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit" onClick={login}>Login</Button>
            </form>
        </>
    );
}

export default LoginPage;
