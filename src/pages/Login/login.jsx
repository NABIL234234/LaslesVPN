import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SignIn from "../Login/singIn/SingIn"; // проверь пути!
import SignUp from "../Login/singUp/SingUp"

function Login() {
    const { mode } = useParams()
    const [isLogin, setIsLogin] = useState(mode !== "signup");

    useEffect(() => {
        setIsLogin(mode !== "signup");
    }, [mode]);

    const toggleForm = (e) => {
        if (e) e.preventDefault();
        setIsLogin(!isLogin);
    };

    return (
        <div className="login-container">
            {isLogin ? (
                <SignIn onNavigate={toggleForm} />
            ) : (
                <SignUp onNavigate={toggleForm} />
            )}
        </div>
    );
}

export default Login;