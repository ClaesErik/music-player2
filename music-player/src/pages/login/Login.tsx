import { FormEvent, useState } from "react";
import { login } from "../../services/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({ login: "", password: "" });

    const onClick = async (event: FormEvent) => {
        event.preventDefault();
        const loginResults = await login(loginData);
        console.log(loginResults);

        if (!loginResults) return;

        localStorage.setItem("token", loginResults);
        navigate("/");
    };

    return (
        <div>
            <form onSubmit={onClick}>
                <input
                    type="text"
                    placeholder="user"
                    value={loginData.login}
                    onChange={(e) =>
                        setLoginData((prev) => ({
                            ...prev,
                            login: e.target.value,
                        }))
                    }
                />
                <input
                    type="password"
                    placeholder="password"
                    value={loginData.password}
                    onChange={(e) =>
                        setLoginData((prev) => ({
                            ...prev,
                            password: e.target.value,
                        }))
                    }
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
