import { useContext, useEffect } from "react";
import CustomizedDialogs from "../../components/modalAdd";
import Schedule from "../../components/schedule"
import "./styles.css"
import { Button } from '@mui/material';
import { DashContext } from "../../contexts/dashboardContext";
import { UserContext } from "../../contexts/userContext";


export const Dashboard = () => {
    
    const {handleAddClickOpen} = useContext(DashContext)
    const {autoLogin, logout} = useContext(UserContext)

    
    useEffect(()=>{
        autoLogin();
    }, [])

    return (
        <main id="main-dash">
            <nav>
                <h1>AGENDA ESCOLAR</h1>
                <div id="div-buttons">
                    <Button 
                        variant="contained" 
                        color="success" 
                        onClick={handleAddClickOpen}>
                            Atividade
                        </Button>
                    <Button 
                        variant="outlined" 
                        color="error"
                        onClick={logout}>
                            Sair
                    </Button>
                </div>
            </nav>
            <div id="schedule-div">
                <Schedule></Schedule>
            </div>
            <CustomizedDialogs props={open}></CustomizedDialogs>
        </main>
    )
}