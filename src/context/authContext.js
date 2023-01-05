import { createContext, useEffect, useState } from "react";
import A from '../assets/a.jpg'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
       localStorage.getItem("user") || null
    );
    
    const login = () => {
      setCurrentUser({
         id: 1,
         name: "Amare Abebe",
         profilePic:
             "https://images.app.goo.gl/vsqjiMWm7jFe4fPd7" , 
      });
    };

    useEffect(() => {
       localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
}