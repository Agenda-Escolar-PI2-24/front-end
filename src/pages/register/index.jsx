import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { useContext, useState } from "react";
import { FormControl , TextField, Button } from '@mui/material';
import "./styles.css";


export const RegisterPage = () => {
    
    const { newUser } = useContext(UserContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", password: "" });


    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: "", email: "", password: "" };

        if (!name){
            newErrors.name = "Nome Completo é obrigatório."
            isValid = false;
        }

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

    const handleRegister = () => {
        if (validateForm()) {
            newUser({ name, email, password });
        }
    };

    return (
        <main id="main-register">
            <section className="section-form">
                <h2>Cadastro</h2>
                <FormControl fullWidth={true}>
                    <TextField 
                        id="name" 
                        required="true" 
                        margin="dense"
                        type="text" 
                        label="Nome Completo" 
                        variant="outlined" 
                        onChange={(e) => setName(e.target.value)}
                        error={Boolean(errors.name)}
                        helperText={errors.name}
                    />
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
                <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={handleRegister}
                    >Cadastrar</Button>   
                <span>Retorne para a tela de <Link to="/"> Login</Link></span>               
            </section>         
        </main>
    )
}