import { createContext, useState } from "react";
// import { api } from "../../services/api";

export const DashContext = createContext({})

export const DashProvider = ({ children }) => {
    const [modalAddOpen, setModalAddOpen] = useState(false)
    
    const handleAddClickOpen = () => {     
      setModalAddOpen(true);
    };
    const handleAddClose = () => {
      setModalAddOpen(false);
    };

    // const [schedules, setSchedules] = useState([])

    // const getSchedules = async () => {
    //     const token = localStorage.getItem("@TOKEN__AGENDA__ESCOLAR")
        
    //     if (token) {
    //         try{
    //             const response = await api.get("/dates", {
    //                 headers: {
    //                     authorization: `Bearer ${token}`,
    //                 },
    //             });

    //             if(response.status === 200) {
    //                 setSchedules(response.data)
    //             }

    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    // }
  
    return (
      <DashContext.Provider value={{
          modalAddOpen, 
          handleAddClickOpen, 
          handleAddClose
        }}>
        {children}
      </DashContext.Provider>
    );
  };