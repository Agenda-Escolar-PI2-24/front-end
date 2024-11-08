import {Link} from "react-router-dom"
import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect, useState } from "react";
import { FormControl , TextField, Button } from '@mui/material';
import "./styles.css";


export const LoginPage = () => {
    
    const { login, autoLogin } = useContext(UserContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });

    useEffect(()=>{
        autoLogin();
    }, [])

    const validateForm = () => {
        let isValid = true;
        const newErrors = { email: "", password: "" };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            newErrors.email = "Email é obrigatório.";
            isValid = false;
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Email inválido.";
            isValid = false;
        }

        if (!password) {
            newErrors.password = "Senha é obrigatória.";
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleLogin = () => {
        if (validateForm()) {
            login({ email, password });
        }
    };

    return (
        <main id="main-login">
            <section className="section-form">
                <h2>Login</h2>
                <FormControl fullWidth={true}>
                    <TextField 
                        id="email"
                        required="true" 
                        margin="dense"
                        type="email" 
                        label="Email" 
                        variant="outlined" 
                        color="secondary"
                        onChange={(e) => setEmail(e.target.value)}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                    />
                    <TextField 
                        id="password" 
                        required="true" 
                        margin="dense"
                        type="password" 
                        label="Senha" 
                        variant="outlined" 
                        onChange={(e) => setPassword(e.target.value)}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                    />
                </FormControl>
                <Button variant="outlined" color="primary" onClick={handleLogin}>Entrar</Button>
                <span>É novo(a) por aqui?<Link to="/register"> Cadastre-se</Link> e aproveite!</span>
                    
            </section>         
        </main>
    )
}