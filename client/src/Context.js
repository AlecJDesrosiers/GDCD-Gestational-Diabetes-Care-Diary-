import React, { useState,createContext, useContext} from "react"; 
export const Context = createContext();

const Contextprovider = ({children}) => {
    const [state, setState,dateofscores, 
        patientNumber, 
        bgvBeforeBreakfast, 
        bgvAfterBreakfast, 
        bgvAfterLunch, 
        bgvAfterSupper, 
        idBeforeBreakfast, 
        idBeforeLunch, 
        idBeforeSupper, 
        idEvening, 
        comments] = useState()
    return (
        <Context.Provider value={{state, setState,
    dateofscores, 
    patientNumber,
    bgvBeforeBreakfast, 
    bgvAfterBreakfast, 
    bgvAfterLunch, 
    bgvAfterSupper, 
    idBeforeBreakfast, 
    idBeforeLunch, 
    idBeforeSupper,
    idEvening, 
    comments,}}>
            {children}
                </Context.Provider>  );
                };
                export const useDataContext = () => useContext(Context)

                export default Contextprovider