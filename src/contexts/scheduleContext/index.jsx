/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { api } from "../../services/api";

const UserContext = createContext({})

export const UserProvider = ({ children }) => {

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
      <UserContext.Provider value={{}}>
        {children}
      </UserContext.Provider>
    );
  };