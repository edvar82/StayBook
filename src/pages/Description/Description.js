import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading/Loanding";

import "./description.css";

import axios from "axios";

import { FaStar } from "react-icons/fa6";

export default function Description() {
  const hotelId = useParams();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [imagem, setImage] = useState("");
  const [endereco, setEndereco] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    // console.log();
    setIsLoading(true);
    const options = {
      method: "POST",
      url: "https://hotels4.p.rapidapi.com/properties/v2/detail",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "d3a927dc58msh2a358643581b862p1ddb0djsnd4b86e9e2254",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
      data: {
        currency: "BRA",
        eapid: 3,
        locale: "pt_BR",
        siteId: 301800003,
        propertyId: hotelId["hotelId"],
      },
    };

    try {
      const response = await axios.request(options);
      setNome(response.data.data.propertyInfo.summary.name);
      setImage(
        response.data.data.propertyInfo.propertyGallery.images[0].image.url
      );

      const rua =
        response.data.data.propertyInfo.summary.location.address.addressLine;
      const estado =
        response.data.data.propertyInfo.summary.location.address.province;
      const cidade =
        response.data.data.propertyInfo.summary.location.address.city;

      setEndereco(rua + cidade + estado);

      console.log(response.data.data.propertyInfo);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: "40px" }}>
        <h2>{nome}</h2>
        <div className="content" style={{ maxHeight: "580px" }}>
          <div className="imagem" style={{ zoom: "0.8" }}>
            <img src={imagem}></img>
            <div className="valores">
              <div className="valueDescription">
                {/* <h6>Valor da Diria:</h6>
                <h6>Custo fixo:</h6> */}
                <h6>Total:</h6>
              </div>
              <div className="price">
                {/* <h6>R$529,80</h6>
                <h6>R$50,00</h6> */}
                <h6>R$579,80</h6>
              </div>
            </div>
            <div className="star pt-5">
              <FaStar size={50} color="yellow" />
              <FaStar size={50} color="yellow" />
              <FaStar size={50} color="yellow" />
              <FaStar size={50} color="yellow" />
              <FaStar size={50} color="yellow" />
            </div>
          </div>
          <div className="descriptionOfHotel">
            <p style={{ textAlign: "justify", paddingRight: "40px" }}>
              {endereco}
            </p>
            <div className="buttonAcomodacao pt-5">
              <button
                className="touchButton"
                style={{ fontSize: "20px" }}
                onClick={() => {
                  navigate("/payment");
                }}
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
