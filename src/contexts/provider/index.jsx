/* eslint-disable react/prop-types */
// import { ScheduleProvider } from "../scheduleContext";
import { UserProvider } from "../userContext";


export const Providers = ({ children }) => {
    return (
      <UserProvider>
        {/* <ScheduleProvider> */}
         {children}
        {/* </ScheduleProvider> */}
      </UserProvider>
    );
  };