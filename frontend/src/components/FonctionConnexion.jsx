import React from "react";

function FonctionConnexion() {
  const handleClick = (e) => {
    e.prenventDefault();
  };

  return (
    <div>
      <a
        href="https://blog.juansorroche.com/mysql-desactiver-les-contraintes-referentielles-temporairement"
        onClick={handleClick}
      >
        Connexion
      </a>
    </div>
  );
}

export default FonctionConnexion;
