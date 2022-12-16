import React from "react";

function FonctionMdpOublie() {
  const handleClick = (e) => {
    e.prenventDefault();
  };

  return (
    <div>
      <a href="https://kaamelott.reiter.tf/quotes" onClick={handleClick}>
        Mot de passe oublié ?
      </a>
    </div>
  );
}

export default FonctionMdpOublie;
