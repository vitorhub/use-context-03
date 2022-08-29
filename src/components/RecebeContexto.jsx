import React, { useContext } from "react";
import { UserContext } from "./Contexto";

function RecebeContexto() {
  const {user, setUser} = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
      <button onClick={ ()=> setUser("new state") }> altera estado </button>
    </>
  );
}

export default RecebeContexto;