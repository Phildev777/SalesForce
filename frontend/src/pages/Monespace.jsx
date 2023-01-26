import React, { useContext } from "react";
import MyProfile from "../components/MyProfile";
import UserContext from "../contexts/UserContext";

function Monespace() {
  const profile = useContext(UserContext);

  return (
    <div>
      {profile.id}
      <MyProfile />
    </div>
  );
}

export default Monespace;
