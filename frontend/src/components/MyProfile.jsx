import "../assets/styles/profileCss.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
import cake from "../assets/cake.svg";
import idée from "../assets/idée.svg";
import avatar from "../assets/avatar.svg";
import crayon from "../assets/crayon.svg";

function MyProfile() {
  // state (état,données)

  // const [biography, setBiography] = useState(false);
  // const [avatars, setAvatars] = useState(avatar);

  // const [data, setData] = useState([]);

  // const getProfile = () => {
  //   axios
  //     .get(`${PROCESS.env.VITE_BACKEND_URL}/api/utilisateur/profile`)
  //     .then((res) => {
  //       return setData(res.data);
  //     })
  //     .catch((err) => {
  //       return res.status(500).send(err);
  //     });
  // };

  // useEffect(() => {
  //   getProfile();
  // });

  // const handleBio = () => {
  //   setBiography(!biography);
  // }
  /// affichage (render)

  // function handleAvatarChange(event) {
  //   setAvatars(event.target.value);
  // }

  return (
    <div className="all">
      <div className="infosContainer">
        <div className="img">
          <label className="label" htmlFor="cursor">
            <img src={crayon} alt="crayon" />
          </label>
          <img className="avatar" src={avatar} alt="avatar" />
        </div>

        <div className="firstidea">
          {/* <div className="white"> {prenom}</div>
          <div className="white"> {nom} </div> */}
          <div className="row">
            <div className="sdm">
              {/* <div className="white"> {tab[0].service} </div>
              <div className="white"> {tab[0].date_embauche} </div>
              <div className="white"> {tab[0].mail} </div> */}
            </div>
            <div className="birthidea">
              <div className="white">
                <img src={cake} alt="cake" /> 18/05/1982{" "}
              </div>
              <div className="white">
                <img src={idée} alt="ampoule" /> Idées photo
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="biography">
        {" "}
        <span className=" bio">Biographie</span>
        {/* <p value={biography}> */}
        {/* {biography ? ( <p value={biography}>
        </p> ) : ( <div className="text"><textarea name="bio" id="bio" cols="30" rows="10">Ajoutez/ Modifier</textarea></div> ) } */}
        <p>
          {/* {props.prenom} */}
          Lorem ipsum dolor sit amet. Non nulla mollitia sed atque tenetur et
          sint quam aut cumque perferendis quo quae veritatis ut maxime optio in
          mollitia autem. Et necessitatibus suscipit eos voluptatibus
          consequatur quo veniam quod quo nobis voluptatem. Non tenetur pariatur
          et magni veniam sit corporis dolor et ipsum vitae vel beatae optio?
          Aut architecto cupiditate sit enim beatae eos autem consequuntur ad
          dicta excepturi est quia porro qui quam itaque ab libero animi. Et
          molestiae quaerat et sequi vero ut magnam rerum non consequatur velit
          eum nesciunt iusto est fuga eaque est quia dolor.
        </p>
        {/* <div className="pencil"> <button type="button" onClick={handleBio} > pencil draw</button> </div> */}
      </div>
      {/* <div className="newIdee">
        Ici il y aura les idees que l'utilisateur aura soumis classées par ordre chronologique.
      </div> */}
    </div>
  );
}

export default MyProfile;
