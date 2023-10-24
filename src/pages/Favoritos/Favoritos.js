import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./favoritos.css";

import { MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";

export default function Favoritos() {
  const navigate = useNavigate();

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    getFavoritos();
  }, []);

  async function getDataHotel(arrayId) {
    let dadosHotel = [];
    for (const val of arrayId) {
      const options = {
        method: "POST",
        url: "https://hotels4.p.rapidapi.com/properties/v2/detail",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "d3a927dc58msh2a358643581b862p1ddb0djsnd4b86e9e2254",
          "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
        },
        data: {
          currency: "BRA",
          eapid: 3,
          locale: "pt_BR",
          siteId: 301800003,
          propertyId: val,
        },
      };

      try {
        const response = await axios.request(options);
        dadosHotel.push(response.data.data.propertyInfo);
      } catch (err) {
        console.log(err);
      }
    }

    setFavoritos(dadosHotel);
    console.log(dadosHotel);
  }

  async function getFavoritos() {
    const response = await axios.get(
      `http://localhost:3001/favoritos/cliente/${localStorage.getItem(
        "clienteId"
      )}`
    );
    let idFavoritos = [];

    response.data.map((val) => idFavoritos.push(val.hotelId));
    getDataHotel(idFavoritos);
    // setFavoritos(idFavoritos);
  }

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "50px" }}>
          <MDBIcon
            fa
            icon="heart"
            className="me-2"
            style={{ fontSize: "40px", transform: "translateY(-4px)" }}
          />
          Seus hotéis favoritos
        </h2>

        <div className="cards2">
          {favoritos.map((favorito) => (
            <div key={favorito} className="card2">
              <div className="image">
                <img src={favorito.propertyGallery.images[0].image.url}></img>
                <div className="text">
                  <strong>{favorito.summary.name}</strong>
                  <span>{favorito.summary.location.address.addressLine}</span>
                </div>
                <button
                  className="buttonEnd"
                  onClick={() => {
                    navigate(`/description/${favorito.summary.id}`);
                  }}
                >
                  Ver Acomodação
                </button>
              </div>
            </div>
          ))}
          {/* <div className="card2">
            <div
              className="image"
              style={{ margin: "auto", paddingRight: "20px" }}
            >
              <img src="hotel2.jpeg"></img>
              <div className="text">
                <strong>Pousada mar da luz</strong>
                <span>Praia do françês</span>
              </div>
              <div className="values">
                <div className="valueDescricao">
                  <p>Valor da diária:</p>
                  <p>Custo fixo:</p>
                  <p>Total:</p>
                </div>
                <div className="value">
                  <p>R$529,80</p>
                  <p>R$50,00</p>
                  <p>R$579,80</p>
                </div>
              </div>

              <button
                className="buttonEnd"
                onClick={() => {
                  navigate("/description");
                }}
              >
                Ver Acomodação
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
