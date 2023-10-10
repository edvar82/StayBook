import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./Search.css";

import axios from "axios";

import { MDBIcon } from "mdb-react-ui-kit";

export default function Search() {
  const navigate = useNavigate();

  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    async function getData() {
      const q = localStorage.getItem("lugar");

      const options = {
        method: "GET",
        url: "https://hotels4.p.rapidapi.com/locations/v2/search",
        params: {
          query: q,
          locale: "pt_BR",
          currency: "BR",
        },
        //   //eapid: 3
        //   //siteId: 301800003
        //   // method: "POST",
        //   // url: "https://hotels4.p.rapidapi.com/properties/v2/detail",
        //   // data: {
        //   //   currency: "BR",
        //   //   eapid: "3",
        //   //   locale: "pt_BR",
        //   //   siteId: "301800003",
        //   //   propertyId: "8099372",
        //   // },
        headers: {
          "X-RapidAPI-Key":
            "3b2679503emsh05c8eb60b7396b2p1a0f05jsn0a8518b4c95e",
          "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        // console.log(response.data["suggestions"][1]["entities"]);
        // setHotel(response.data);
        setHotel(response.data["suggestions"][1]["entities"]);
        // hotel.forEach((val) => console.log(val.name));
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "50px" }}>
          <MDBIcon
            fa
            icon="search"
            className="me-2"
            style={{ fontSize: "40px", transform: "translateY(-4px)" }}
          />
          Resultados da pesquisa
        </h2>

        {hotel.map((val, index) => (
          <div className="cards2">
            <div className="card2">
              <div
                className="image"
                style={{ margin: "auto", paddingRight: "20px" }}
              >
                <img src="hotel2.jpeg"></img>
                <div className="text">
                  <strong>{val.name}</strong>
                  <span>Praia do françês</span>
                </div>
                <div className="values">
                  <div className="valueDescricao">
                    <p>Valor da diária:</p>
                    <p>Custo fixo:</p>
                    <p>Total:</p>
                  </div>
                  <div className="value">
                    <p>R$X,00</p>
                    <p>R$X,00</p>
                    <p>R$X,80</p>
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
          </div>
          <div className="card2">
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
    </>
  );
}
