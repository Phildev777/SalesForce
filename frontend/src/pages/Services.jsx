import React, { useContext } from "react";
import MainContainerTest from "../components/MainContainerTest";
// import {UserContext} from "../App";
import UserContext from "../contexts/UserContext";

function Services() {
  const user = useContext(UserContext);

  return (
    <div>
      {/* <h1>{`Hello${user.token.id} again!`}</h1> */}
      <MainContainerTest />
    </div>
  );
}

export default Services;
