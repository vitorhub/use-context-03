import React, { useContext } from "react";
import { UserContext } from "./Contexto";

function Neto(){
    const {user, setUser} = useContext(UserContext);
    return(
        <>
            <h4>neto: { user } </h4>
            <p>{ setUser } </p>
        </>
    )
}
export default Neto