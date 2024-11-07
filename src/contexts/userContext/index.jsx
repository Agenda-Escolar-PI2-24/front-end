
import { createContext } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const navigate = useNavigate()
  
    const login = async (data) => {
        try{
            const response = await api.post("/login", data);

            if(response.status === 200){
                localStorage.setItem("@TOKEN__AGENDA__ESCOLAR", await response.data.accessToken)
                
                setTimeout(() => {
                    navigate('/dashboard')
                }, 500)                                
            }

        }catch(err){
            if (err.response.data === 'Cannot find user'){
                toast.warn("Usuário não encontrado", {
                    position: "top-center",
                    autoClose: 20000,
                  })
            }else if (err.response.data === 'Incorrect password'){
                toast.warn("Ops! Senha ou usuário incorreto.", {
                    position: "top-center",
                    autoClose: 20000,
                  });
            }else{
                toast.error("Ops! Algo deu errado!", {
                    position: "top-center",
                    autoClose: 20000,
                  });
            }           
        }
    }

    const newUser = async (data) => {
        try{
            const { name, email, password } = data
            await api.post("/users", {name, email, password});            

            toast.success("Usuário cadastrado com sucesso!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
              });

            setTimeout(() => navigate(""), 2000);

        }catch(err){
            console.log(err)
            toast.error("Ops! Algo deu errado!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
              });
        }

    }

    const autoLogin = async () => {
        const token = localStorage.getItem("@TOKEN__AGENDA__ESCOLAR")
        
        if (token) {
            try{
                const response = await api.get("/dates", {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });

                if(response.status === 200) {
                    navigate("/dashboard")
                }

            }catch(err){
                console.log(err)
            }
        }
    }

    const logout = () => {
        navigate("/")
        window.localStorage.clear()
    }
  
    return (
      <UserContext.Provider value={{login, newUser, autoLogin, logout}}>
        {children}
      </UserContext.Provider>
    );
  };