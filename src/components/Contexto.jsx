import React, { useState , createContext } from "react";
import Neto from "./Neto";
import RecebeContexto from "./RecebeContexto";

export const UserContext = createContext();

function Contexto() {
    const [user, setUser] = useState("Vitor Falcao");
    return (
      <UserContext.Provider value={ {user , setUser} }>
        <h1>{`Hello ${user}!`}</h1>
        <RecebeContexto/>
        <Neto/>
      </UserContext.Provider>
    );
  }
  
  export default Contexto;