import React, { useContext } from "react";
import IdeeContainer from "@components/IdeeContainer";
import UserContext from "../contexts/UserContext";

function Idees() {
  const user1 = useContext(UserContext);

  return (
    <div>
      <h1>{user1.token}</h1>
      <IdeeContainer />
    </div>
  );
}

export default Idees;
