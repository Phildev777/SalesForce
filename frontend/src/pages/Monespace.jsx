import React from "react";
import PropTypes from "prop-types";
import MyProfile from "../components/MyProfile";

function Monespace({ id }) {
  return (
    <div>
      <MyProfile id={id} />
    </div>
  );
}

Monespace.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Monespace;
